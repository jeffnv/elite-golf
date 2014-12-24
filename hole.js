function Hole(loc) {
    this.loc = loc
}
Hole.RADIUS = 10;
Hole.MAX_BALL_SPEED = 1;


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
  return (ballDistance < Hole.RADIUS) && (ballSpeed < Hole.MAX_BALL_SPEED);
}
