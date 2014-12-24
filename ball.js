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
    console.log(this.loc);
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
            var wallVec = Vector.fromCoords(wall.start, wall.end);
            var incAngle = ball.velocity.direction - wallVec.direction;
            var newAngle = 2 * (wallVec.direction) - ball.velocity.direction;
            ball.velocity = new Vector(ball.velocity.magnitude, newAngle);
                //-2 * (V o N) * N + V
                // var wallVec = Vector.fromCoords(wall.start, wall.end);
                // var wallOffsets = wallVec.toOffsets();
                // var wallNormal = wallVec.normal();
                // var dot = wallVec.dotProduct(ball.velocity);
                // var nv = {
                //     x: wallNormal.x * dot,
                //     y: wallNormal.y * dot
                // };
                // var ballOffsets = ball.velocity.toOffsets();
                // var newOffsets = {
                //     x: nv.x - ballOffsets.x,
                //     y: nv.y - ballOffsets.y
                // };
                // ball.velocity = Vector.fromOffsets(newOffsets.x, newOffsets.y);
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
