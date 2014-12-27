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
    },
    drawText: function(context, message) {
        context.font = 'bold 20pt Helvetica';
        context.fillText(message, 65, 50);
    },
    drawBackground: function(context, options) {
        context.fillStyle = options.color;
        context.fillRect(0, 0, options.width, options.height);
    },
    drawRect: function(context, options) {
        var x = options.topLeft.x;
        var y = options.topLeft.y;
        var width = options.bottomRight.x - x;
        var height = options.bottomRight.y - y;
        context.beginPath();
        context.rect(x, y, width, height);
        context.fillStyle = options.color;
        context.fill();
    }
}
