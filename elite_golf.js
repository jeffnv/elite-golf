function Golf(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
}

Golf.prototype.run = function(canvas) {
    this.registerEvents(canvas);
    setInterval(this.tick.bind(this), 25);
}

Golf.prototype.registerEvents = function() {
    canvas.addEventListener(
        'mousedown',
        this.handleMouseDown.bind(this),
        false
    );
}

Golf.prototype.handleMouseDown = function(event) {
    var clickStart = {
        x: event.x,
        y: event.y
    };
    var that = this;

    function releaseHandler(event) {
        var clickEnd = {
            x: event.x,
            y: event.y
        };
        that.canvas.removeEventListener('mouseup', releaseHandler);
        that.handleDrag(clickStart, clickEnd);
    };
    this.canvas.addEventListener(
        'mouseup',
        releaseHandler,
        false
    );
}

Golf.prototype.handleDrag = function(clickStart, clickEnd) {
    this.level && this.level.hitBall(clickStart, clickEnd);
}

Golf.prototype.tick = function() {
    this.level && this.level.tick(this.ctx);
}

Golf.prototype.playLevel = function(level) {
    this.level = level;
}

