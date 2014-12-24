function Ball(loc, level) {
    this.loc = loc;
    this.level = level;
    this.velocity = new Vector(0, 0);
}

Ball.prototype = Object.create(GameItem.prototype);

Ball.prototype.render = function(context) {
    GolfDraw.drawCircle(context, {
        color: 'white',
        radius: 5,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
    var offsets = this.velocity.toOffsets();
    var vEnd = {
        x: this.loc.x + offsets.x * 50,
        y: this.loc.y + offsets.y * 50
    };
    GolfDraw.drawLine(context, {
        color: 'white',
        width: 2,
        start: this.loc,
        end: vEnd
    })
}

Ball.prototype.hit = function(force, direction) {
    var magnitude = force / 20;
    this.velocity = new Vector(magnitude, direction);
}
Ball.prototype.move = function() {
    var offsets = this.velocity.toOffsets();
    this.loc.x += offsets.x;
    this.loc.y += offsets.y;
    this.applyFriction();
    this.processCollisions();
}

Ball.prototype.processCollisions = function() {
    var ball = this;
    this.level.walls.forEach(function(wall) {
        if (wall.nearWall(ball.loc)) {
            console.log("collision at " + ball.loc.x + ",  " + ball.loc.y);
            var wallAngle = Vector.fromCoords(wall.start, wall.end).direction;
            var ballAngle = ball.velocity.direction;
            var newAngle = 2 * wallAngle - ballAngle;
            ball.velocity = new Vector(
                ball.velocity.magnitude,
                newAngle
            );
        }
    });
}

Ball.prototype.applyFriction = function(vel) {
    var friction = this.level.frictionAtLoc(this.loc);
    if (this.velocity.magnitude > friction) {
        this.velocity.magnitude -= friction;
    } else {
        this.velocity.magnitude = 0;
    }
}
