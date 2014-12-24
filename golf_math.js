GolfMath = {
    distBtwPoints: function(start, end) {
        var dy = end.y - start.y;
        var dx = end.x - start.x;
        return Math.sqrt(dy * dy + dx * dx);
    }
}
