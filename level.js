function Level(data, dimX, dimY) {
    this.ball = new Ball(data.ballLoc, this);
    this.hole = new Hole(data.holeLoc);
    this.walls = Wall.initArray(data.walls);
    this.dimX = dimX;
    this.dimY = dimY;
    this.subItems = [this.ball, this.hole];
    this.subItems = this.subItems.concat(this.walls);
}
Level.prototype = Object.create(GameItem.prototype);

Level.prototype.render = function(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, this.dimX, this.dimY);
    if (this.vector) {
        GameItem.drawLine(ctx, {
            color: 'white',
            width: 2,
            start: this.vector.start,
            end: this.vector.end
        })
    }
}

Level.prototype.hitBall = function(hitVector) {
    if (this.vector) {
        //only display swing vector before ball is hit
        delete this.vector;
    }
    this.ball.hit(hitVector.magnitude, hitVector.direction);
}

Level.prototype.frictionAtLoc = function(pos) {
    //arbitrary value
    //intend to figure friction at location and return that
    return 0.03;
}


Level.prototype.drawVector = function(vec) {
    var offsets = GolfMath.offsetsFromVector(vec);
    var start = this.ball.loc;
    this.vector = {
        start: start,
        end: {
            x: start.x + offsets.dx,
            y: start.x + offsets.dy
        }
    }
}
