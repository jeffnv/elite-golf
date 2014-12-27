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
        context.beginPath();
        context.fillStyle = options.color;
        context.fillRect(0, 0, options.width, options.height);
    },
    drawRoundRect: function(context, options) {
        var radius = options.radius || 1;
        var x = options.topLeft.x;
        var y = options.topLeft.y;
        var width = options.bottomRight.x - x;
        var height = options.bottomRight.y - y;
        context.fillStyle = options.color;
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
        context.fill();
    },
    drawRect: function(context, options) {
        var x = options.topLeft.x;
        var y = options.topLeft.y;
        var width = options.bottomRight.x - x;
        var height = options.bottomRight.y - y;
        context.fillStyle = options.color;
        context.beginPath();
        context.rect(x, y, width, height);
        context.fill();
    }
}
