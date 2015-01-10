GameItem = function(options) {
    this.properties = {}.extend(options);
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
