GolfMath = {
    vectorizeCoords: function(start, end) {
        var dy = end.y - start.y;
        var dx = end.x - start.x;
        var force = Math.sqrt(dy * dy + dx * dx);
        var direction = Math.atan2(dy, dx);
        return {
            magnitude: force,
            direction: direction
        };
    },
    offsetsFromVector: function(vec) {
        var dx = Math.cos(vec.direction) * vec.magnitude;
        var dy = Math.sin(vec.direction) * vec.magnitude;
        return {dx: dx, dy: dy};
    }
}
