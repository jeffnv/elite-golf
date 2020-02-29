import GolfMath from "../util/golf_math";
export default function Vector(magnitude, direction) {
    this.magnitude = magnitude;
    //make sure it is within 2pi
    this.direction = (direction + 2 * Math.PI) % (2 * Math.PI);
}

Vector.fromCoords = function (start, end) {
    const dy = end.y - start.y;
    const dx = end.x - start.x;
    const direction = Math.atan2(dy, dx);
    const magnitude = GolfMath.distBtwPoints(start, end);
    return new Vector(magnitude, direction);
}

Vector.fromOffsets = function (dx, dy) {
    const direction = Math.atan2(dy, dx);
    const magnitude = Math.sqrt(dx * dx + dy * dy);
    return new Vector(magnitude, direction);
}

Vector.prototype.dotProduct = function (other) {
    const v1 = this.toOffsets();
    const v2 = other.toOffsets();
    return v1.x * v2.x + v1.y * v2.y;
}

Vector.prototype.crossProduct = function (other) {
}

Vector.prototype.toOffsets = function () {
    const dx = Math.cos(this.direction) * this.magnitude;
    const dy = Math.sin(this.direction) * this.magnitude;
    return {
        x: dx,
        y: dy
    };
}
Vector.prototype.normal = function () {
    const v = this.toOffsets();
    const hyp = Math.sqrt(v.x * v.x + v.y * v.y);
    return {
        x: v.y / hyp,
        y: (-1 * v.x) / hyp
    }
}
