GameItem = function(options) {
    this.properties = {}.extend(options);
}

GameItem.drawCircle = function(context, options) {
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

GameItem.prototype.tick = function(ctx) {
    this.move && this.move();
    this.render(ctx);
    if (this.subItems) {
        this.subItems.forEach(function(item) {
            item.tick(ctx)
        });
    }
}

GameItem.prototype.render = function(ctx) {}
