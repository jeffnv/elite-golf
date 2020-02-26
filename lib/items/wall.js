import GameItem from "../base_classes/game_item";
import GolfDraw from "../util/golf_draw";
import GolfMath from "../util/golf_math";
export default function Wall(start, end) {
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

Wall.prototype.wallAngle = function(){
  return new Vector(this.start, this.end).direction;
}

Wall.NEARNESS_THRESHOLD = 1;

Wall.prototype.nearWall = function(point){
  var wallLength = GolfMath.distBtwPoints(this.start, this.end);
  var distToStart = GolfMath.distBtwPoints(this.start, point);
  var distToEnd = GolfMath.distBtwPoints(this.end, point);
  var nearNess = Math.abs(distToStart + distToEnd - wallLength);
  //the lower the nearNess, the closer to the wall the point is
  return nearNess < Wall.NEARNESS_THRESHOLD;
}

Wall.prototype.render = function(context) {
    GolfDraw.drawLine(context, {
        color: 'brown',
        width: 5,
        start: this.start,
        end: this.end
    });
}
