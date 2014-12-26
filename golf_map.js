function GolfMap(data, dimX, dimY, strokeCallback, mapOverCallback) {
    this.ball = new Ball(data.ballLoc, this);
    this.hole = new Hole(data.holeLoc);
    this.walls = Wall.initArray(data.walls);
    this.dimX = dimX;
    this.dimY = dimY;
    this.subItems = [this.ball, this.hole];
    this.subItems = this.subItems.concat(this.walls);
    this.strokeCallback = strokeCallback;
    this.mapOverCallback = mapOverCallback;
}

GolfMap.prototype = Object.create(GameItem.prototype);
GolfMap.prototype.ballMoving = function() {
    return this.ball.moving();
}

GolfMap.prototype.tick = function(ctx) {
    GameItem.prototype.tick.call(this, ctx);
    if (this.hole.ballInHole(this.ball)) {
        this.mapOverCallback();
    }
}

GolfMap.prototype.render = function(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, this.dimX, this.dimY);
    if (this.vector) {
        GolfDraw.drawLine(ctx, {
            color: 'orange',
            width: 2,
            start: this.vector.start,
            end: this.vector.end
        })
    }
}

GolfMap.MINIMUM_SWING_STRENGTH = 8;
GolfMap.prototype.hitBall = function(hitVector) {
    delete this.vector;
    if (hitVector.magnitude < GolfMap.MINIMUM_SWING_STRENGTH) {
        return;
    }
    this.strokeCallback();
    this.ball.hit(hitVector.magnitude, hitVector.direction);
}

GolfMap.prototype.frictionAtLoc = function(pos) {
    //arbitrary value
    //intend to figure friction at location and return that
    return 0.03;
}


GolfMap.prototype.drawVector = function(vec) {
    var offsets = vec.toOffsets();
    var start = this.ball.loc;
    this.vector = {
        start: start,
        end: {
            x: start.x + offsets.x,
            y: start.y + offsets.y
        }
    }
}
