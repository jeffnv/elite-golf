export default {
    distBtwPoints: function (start, end) {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        return Math.sqrt(dy * dy + dx * dx);
    }
}
