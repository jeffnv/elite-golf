function Level(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.mapIndex = 0;
    this.loadMap();
}

Level.prototype = Object.create(GameMode.prototype);

Level.prototype.playNextMap = function() {
    this.mapIndex++;
    //should check to see if we are out of maps
    if (this.mapIndex < MAPS.length) {
        this.loadMap();
    } else {
        alert('game over!');
        this.endCallback(GolfStates.WELCOME_SCREEN);
    }
}

Level.prototype.dispose = function() {
    debugger
    clearInterval(this.intervalID);
    canvas.removeEventListener(
        'mousedown',
        this.boundMouseHandler
    );
}

Level.prototype.loadMap = function() {
    this.map = new GolfMap(
        MAPS[this.mapIndex],
        this.width,
        this.height,
        this.playNextMap.bind(this)
    );
}

Level.prototype.startAction = function() {
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
    this.intervalID = setInterval(intervalCallback, 1000 / FPS);
}

Level.prototype.registerEvents = function() {
    this.boundMouseHandler = this.handleMouseDown.bind(this);
    canvas.addEventListener(
        'mousedown',
        this.boundMouseHandler,
        false
    );
}

Level.prototype.handleMouseDown = function(event) {
    console.log("CLICKAROO");
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
