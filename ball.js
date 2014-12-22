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
    var offsets = GolfMath.offsetsFromVector(this.velocity);
    var vEnd = {
        x: this.loc.x - offsets.x * 50,
        y: this.loc.y - offsets.y * 50
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
    this.velocity = {
        magnitude: magnitude,
        direction: direction
    };
}
Ball.prototype.move = function() {
    var offsets = GolfMath.offsetsFromVector(this.velocity);
    this.loc.x -= offsets.x;
    this.loc.y -= offsets.y;
    this.applyFriction();
    this.processCollisions();
}

Ball.prototype.processCollisions = function() {
    var ball = this;
    this.level.walls.forEach(function(wall) {
        if (wall.nearWall(ball.loc)) {
            console.log('ball angle: ' + ball.velocity.direction);
            var wallVec = GolfMath.vectorizeCoords(wall.start, wall.end);
            var wallOffsets = GolfMath.offsetsFromVector(wallVec);
            var wallNormal = GolfMath.normal(wallOffsets);
            var ballVec = GolfMath.offsetsFromVector(ball.velocity);
            var n1 = GolfMath.dotProduct(ballVec, wallNormal) * 2;
            var nv = {
                x: wallNormal.x * n1,
                y: wallNormal.y * n1
            };
            var newVec = {
                x: nv.x - ballVec.x,
                y: nv.y - ballVec.y
            };
            ball.velocity.direction = Math.atan2(newVec.x, newVec.y);
            console.log('ball direction: ' + ball.velocity.direction);
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
