
function Water(topLeft, bottomRight) {
    this.topLeft = topLeft;
    this.bottomRight = bottomRight;
}

Water.initArray = function(waterData) {
    var waters = [];
    if (waterData) {
        waterData.forEach(function(data) {
            waters.push(new Water(data.topLeft, data.bottomRight));
        });
    }
    return waters;
}

Water.prototype = Object.create(GameItem.prototype);
Water.prototype.render = function(context) {
    GolfDraw.drawRoundRect(context, {
        color: 'blue',
        radius: 10,
        topLeft: this.topLeft,
        bottomRight: this.bottomRight
    });
}

Water.prototype.contains = function(ball){
  return (ball.loc.x <= this.bottomRight.x) &&
         (ball.loc.x >= this.topLeft.x) &&
         (ball.loc.y >= this.topLeft.y) &&
         (ball.loc.y <= this.bottomRight.y);
}
