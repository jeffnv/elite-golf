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
    GameItem.drawCircle(context, {
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
    var offsetY = Math.sin(this.velocity.direction) * this.velocity.magnitude;
    var offsetX = Math.cos(this.velocity.direction) * this.velocity.magnitude;
    this.loc.x -= offsetX;
    this.loc.y -= offsetY;
    this.applyFriction();
}

Ball.prototype.applyFriction = function(vel) {
    var friction = this.level.frictionAtLoc(this.loc);
    if (this.velocity.magnitude > friction) {
        this.velocity.magnitude -= friction;
    } else {
        this.velocity.magnitude = 0;
    }
}
