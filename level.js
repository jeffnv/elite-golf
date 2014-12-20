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
    if (this.vector){
      ctx.beginPath();
      ctx.moveTo(this.vector.start.x, this.vector.start.y);
      ctx.lineTo(this.vector.end.x, this.vector.end.y);
      ctx.stroke();
    }
}

Level.prototype.hitBall = function(start, end){
  if(this.vector){
    //only display swing vector before ball is hit
    delete this.vector;
  }
  var vel = Level.vectorizeCoords(start, end);
  this.ball.hit(vel.magnitude, vel.direction);
}

Level.vectorizeCoords = function(start, end){
  var dy = end.y - start.y;
  var dx = end.x - start.x;
  var force = Math.sqrt(dy * dy + dx * dx);
  var direction = Math.atan2(dy, dx);
  return {magnitude: force, direction: direction};
}

Level.prototype.frictionAtLoc = function(pos){
  //arbitrary value
  return 0.03;
}

// ctx.save();
// ctx.moveTo(pos) // position of the ball
// ctx.rotate(rads) // where rads is the angle between the ball and the
// mouse
// ctx.fillRect(p1, p2, p3, p4) // dimensions of your rectangle
// ctx.restore();

Level.prototype.drawVector = function(start, end){
  var vec = Level.vectorizeCoords(start, end);
  var ballX = this.ball.loc.x;
  var ballY = this.ball.loc.y;
  var endX = ballX + (Math.cos(vec.direction) * vec.magnitude);
  var endY = ballY + (Math.sin(vec.direction) * vec.magnitude);
  this.vector = {
    start: this.ball.loc,
    end: { x: endX, y: endY }
  }
}
