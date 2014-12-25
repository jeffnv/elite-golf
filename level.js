function Level(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.map = new GolfMap(LEVELS[0], this.width, this.height);
}

Level.prototype = Object.create(GameMode.prototype);

Level.prototype.startAction = function(){
    var that = this;
    var frameCount = 0;
    var intervalCallback = function() {
        if (SLOW_MODE) {
            frameCount++;
            if (frameCount >= SLOWNESS_FACTOR) {
                frameCount = 0;
                that.tick();
            }
        } else {
            that.tick();
        }
    }
    setInterval(intervalCallback, 1000 / FPS);
}

Level.prototype.registerEvents = function() {
    canvas.addEventListener(
        'mousedown',
        this.handleMouseDown.bind(this),
        false
    );
}

Level.prototype.handleMouseDown = function(event) {
    var clickStart = {
        x: event.x,
        y: event.y
    };
    var that = this;

    function dragHandler(event) {
        var currentPos = {
            x: event.x,
            y: event.y
        };
        that.drawVector(clickStart, currentPos);
    }

    function releaseHandler(event) {
        var clickEnd = {
            x: event.x,
            y: event.y
        };
        that.canvas.removeEventListener('mouseup', releaseHandler);
        that.canvas.removeEventListener('mousemove', dragHandler);
        that.handleRelease(clickStart, clickEnd);
    };
    this.canvas.addEventListener(
        'mouseup',
        releaseHandler,
        false
    );
    this.canvas.addEventListener(
        'mousemove',
        dragHandler,
        false
    );
}

Level.prototype.drawVector = function(start, end) {
    var vector = Vector.fromCoords(start, end);
    this.map && this.map.drawVector(vector);
}
Level.prototype.handleRelease = function(clickStart, clickEnd) {
    var vector = Vector.fromCoords(clickStart, clickEnd);
    //want to hit ball in opposite direction from the drag
    //angry birds style
    vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);
    this.map && this.map.hitBall(vector);
}

Level.prototype.tick = function() {
    this.map && this.map.tick(this.ctx);
}

Level.prototype.playMap = function(map) {
    this.map = map;
}

