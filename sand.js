Sand.DEFAULT_SAND_FRICTION = 0.3;
function Sand(topLeft, bottomRight) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
    this.friction = Sand.DEFAULT_SAND_FRICTION;
}

Sand.initArray = function(sandData) {
    var traps = [];
    if (sandData) {
        sandData.forEach(function(data) {
            traps.push(new Sand(data.topLeft, data.bottomRight));
        });
    }
    return traps;
}

Sand.prototype = Object.create(GameItem.prototype);

Sand.prototype.render = function(context) {
    GolfDraw.drawRoundRect(context, {
        color: 'khaki',
        radius: 10,
        topLeft: this.topLeft,
        bottomRight: this.bottomRight
    });
}

Sand.prototype.contains = function(ball){
  return (ball.loc.x <= this.bottomRight.x) &&
         (ball.loc.x >= this.topLeft.x) &&
         (ball.loc.y >= this.topLeft.y) &&
         (ball.loc.y <= this.bottomRight.y);
}

