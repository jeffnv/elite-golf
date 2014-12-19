function Hole(loc) {
    this.loc = loc
}

Hole.prototype = Object.create(GameItem.prototype);

Hole.prototype.render = function(context) {
    GameItem.drawCircle(context, {
        color: 'black',
        radius: 10,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}
