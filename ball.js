function Ball(loc, level) {
    this.loc = loc;
    this.level = level;
    this.velocity = {
        magnitude: 0,
        direction: 0
    };
}

Ball.prototype = Object.create(GameItem.prototype);

Ball.prototype.render = function(context) {
    GolfDraw.drawCircle(context, {
        color: 'white',
        radius: 5,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}

Ball.prototype.hit = function(force, direction) {
    var magnitude = force / 20;
    this.velocity = {
        magnitude: magnitude,
        direction: direction
    };
}
Ball.prototype.move = function() {
    var offsets = GolfMath.offsetsFromVector(this.velocity);
    this.loc.x -= offsets.dx;
    this.loc.y -= offsets.dy;
    this.applyFriction();
    this.processCollisions();
}

Ball.prototype.processCollisions = function() {
  var ball = this;
    this.level.walls.forEach(function(wall) {
      //figure out if ball is in colision with wall
      //if so figure out new velocity
      if(wall.nearWall(ball.loc)){
        console.log('hit a wall!');
        //THIS ONLY WORKS FOR HORIZONTAL WALLS
        ball.velocity.direction *= -1;
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
