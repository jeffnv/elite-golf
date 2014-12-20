GolfDraw = {
    drawLine: function(context, options) {
        context.beginPath();
        context.moveTo(options.start.x, options.start.y);
        context.lineTo(options.end.x, options.end.y);
        context.lineWidth = options.width;
        context.strokeStyle = options.color;
        context.stroke();
    },

    drawCircle: function(context, options) {
        context.beginPath();
        context.arc(
            options.centerX,
            options.centerY,
            options.radius,
            0,
            2 * Math.PI,
            false
        );
        context.fillStyle = options.color;
        context.fill();
    }
}
