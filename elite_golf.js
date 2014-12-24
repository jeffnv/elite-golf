FPS = 60
SLOW = false
function toggleSlowMode(event){
  //runs the game at 1/10th speed for debugging
  //see line 19
  SLOW = !SLOW;
}

function Golf(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
}

Golf.prototype.run = function(canvas) {
    this.registerEvents(canvas);
    var that = this;
    var frameCount = 0;
    var intervalCallback = function() {
        if (SLOW) {
            frameCount++;
            if (frameCount >= 10) {
              frameCount = 0;
              that.tick();
            }
        } else {
            that.tick();
        }
    }
    setInterval(intervalCallback, 1000 / FPS);
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

Golf.prototype.drawVector = function(start, end) {
    var vector = Vector.fromCoords(start, end);
    this.level && this.level.drawVector(vector);
}
Golf.prototype.handleRelease = function(clickStart, clickEnd) {
    var vector = Vector.fromCoords(clickStart, clickEnd);
    //want to hit ball in opposite direction from the drag
    vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);
    this.level && this.level.hitBall(vector);
}

Golf.prototype.tick = function() {
    this.level && this.level.tick(this.ctx);
}

Golf.prototype.playLevel = function(level) {
    this.level = level;
}
