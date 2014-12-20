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
            dx: dx,
            dy: dy
        };
    },
    distBtwPoints: function(start, end) {
        var dy = end.y - start.y;
        var dx = end.x - start.x;
        return Math.sqrt(dy * dy + dx * dx);
    }
}
