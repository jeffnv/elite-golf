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

Wall.prototype.nearWall = function(point){
  var wallLength = GolfMath.distBtwPoints(this.start, this.end);
  var distToStart = GolfMath.distBtwPoints(this.start, point);
  var distToEnd = GolfMath.distBtwPoints(this.end, point);
  var nearNess = Math.abs(distToStart + distToEnd - wallLength);
  //the lower the nearNess, the closer to the wall the point is
  //magic number alert: 2 is close enough to consider it a hit
  return nearNess < 2;
}

Wall.prototype.render = function(context) {
    GolfDraw.drawLine(context, {
        color: 'brown',
        width: 5,
        start: this.start,
        end: this.end
    });
}
