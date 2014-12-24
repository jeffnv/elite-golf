Vector = function(magnitude, direction) {
    this.magnitude = magnitude;
    //make sure it is within 2pi
    this.direction = (direction + 2 * Math.PI) % (2 * Math.PI);
}

Vector.fromCoords = function(start, end) {
    var dy = end.y - start.y;
    var dx = end.x - start.x;
    var direction = Math.atan2(dy, dx);
    var magnitude = GolfMath.distBtwPoints(start, end);
    return new Vector(magnitude, direction);
}

Vector.fromOffsets = function(dx, dy) {
    var direction = Math.atan2(dy, dx);
    var magnitude = Math.sqrt(dx * dx + dy * dy);
    return new Vector(magnitude, direction);
}

Vector.prototype.dotProduct = function(other) {
    var v1 = this.toOffsets();
    var v2 = other.toOffsets();
    return v1.x * v2.x + v1.y * v2.y;
}

Vector.prototype.crossProduct = function(other) { 
}

Vector.prototype.toOffsets = function() {
    var dx = Math.cos(this.direction) * this.magnitude;
    var dy = Math.sin(this.direction) * this.magnitude;
    return {
        x: dx,
        y: dy
    };
}
Vector.prototype.normal = function() {
    var v = this.toOffsets();
    var hyp = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.y / hyp,
        y: (-1 * v.x) / hyp
    }
}
