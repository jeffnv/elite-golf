function Ball(loc, level) {
    this.startLoc = {
        x: loc.x,
        y: loc.y
    };
    this.loc = {
        x: loc.x,
        y: loc.y
    };
    this.level = level;
    this.velocity = new Vector(0, 0);
}

Ball.prototype = Object.create(GameItem.prototype);
Ball.prototype.moving = function(){
  return this.velocity.magnitude > 0;
}
Ball.prototype.reset = function() {
    this.loc.x = this.startLoc.x;
    this.loc.y = this.startLoc.y;
    this.velocity.magnitude = 0;
}

Ball.prototype.render = function(context) {
    this.renderBall(context);
    //this.renderMovementVector(context);
    //useful for debugging bounces, can see direction of travel
}

Ball.prototype.renderBall = function(context) {
    GolfDraw.drawCircle(context, {
        color: 'white',
        radius: 5,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}

Ball.prototype.renderMovementVector = function(context) {
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
    //to prevent repeated ball wall bounce weirdness
    //dissallow bouncing off the same wall consecutively 
    delete this.lastBouncedWall;
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
        if (wall.nearWall(ball.loc) && ball.lastBouncedWall != wall) {
            ball.lastBouncedWall = wall;
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
