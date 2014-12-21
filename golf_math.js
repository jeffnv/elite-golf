GolfMath = {
    vectorizeCoords: function(start, end) {
        var dy = end.y - start.y;
        var dx = end.x - start.x;
        var direction = Math.atan2(dy, dx);
        return {
            magnitude: GolfMath.distBtwPoints(start, end),
            direction: direction
        };
    },
    offsetsFromVector: function(vec) {
        var dx = Math.cos(vec.direction) * vec.magnitude;
        var dy = Math.sin(vec.direction) * vec.magnitude;
        return {
            x: dx,
            y: dy
        };
    },
    dotProduct: function(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    },
    normal: function(v) {
        var hyp = Math.sqrt(v.x * v.x + v.y * v.y);
        return {
            x: v.y / hyp,
            y: (-1 * v.x) / hyp
        }
    },
    distBtwPoints: function(start, end) {
        var dy = end.y - start.y;
        var dx = end.x - start.x;
        return Math.sqrt(dy * dy + dx * dx);
    }
}
