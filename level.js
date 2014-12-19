function Level(data, dimX, dimY) {
    this.ball = new Ball(data.ballLoc, this);
    this.hole = new Hole(data.holeLoc);
    this.dimX = dimX;
    this.dimY = dimY;
    this.subItems = [this.ball, this.hole];
}
Level.prototype = Object.create(GameItem.prototype);

Level.prototype.render = function(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, this.dimX, this.dimY);
}

Level.prototype.hitBall = function(start, end){
  var dy = end.y - start.y;
  var dx = end.x - start.x;
  var force = Math.sqrt(dy * dy + dx * dx);
  var direction = Math.atan2(dy, dx);
  this.ball.hit(force, direction);
}

Level.prototype.frictionAtLoc = function(pos){
  return 0.03;
}
