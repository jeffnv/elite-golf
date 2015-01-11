function Hole(loc) {
    this.loc = loc
}
Hole.RADIUS = 10;
Hole.MAX_BALL_SPEED = 2.5;


Hole.prototype = Object.create(GameItem.prototype);

Hole.prototype.render = function(context) {
    GolfDraw.drawCircle(context, {
        color: 'black',
        radius: Hole.RADIUS,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}

Hole.prototype.ballInHole = function(ball) {
  var ballDistance = GolfMath.distBtwPoints(this.loc, ball.loc);
  var ballSpeed = ball.velocity.magnitude;
  var inHole = false;
  if(ballDistance < Hole.RADIUS){
    if(ballSpeed <= Hole.MAX_BALL_SPEED){
      inHole = true;
      //if ball is traveling too rapidly, it takes a wicked hop :(
    } else {
      inHole = false;
      var offset = (Math.random() * 0.5 * Math.PI) - (0.25 * Math.PI);
      ball.velocity.direction += offset;
    }
  }
  return inHole;
}
