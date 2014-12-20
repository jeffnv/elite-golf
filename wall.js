function Wall(start, end) {
    this.start = start;
    this.end = end;
}

Wall.initArray = function(wallData) {
    var walls = [];
    if (wallData) {
        wallData.forEach(function(data) {
            walls.push(new Wall(data.start, data.end));
        });
    }
    return walls;
}
Wall.prototype = Object.create(GameItem.prototype);

Wall.prototype.render = function(context) {
  GolfDraw.drawLine(context, {color: 'brown', width: 5, start: this.start, end: this.end});
}
