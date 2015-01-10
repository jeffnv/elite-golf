function GolfMap(data, dimX, dimY, strokeCallback, mapOverCallback) {
    this.mapData = data;
    this.ball = new Ball(data.ballLoc, this);
    this.hole = new Hole(data.holeLoc);
    this.walls = Wall.initArray(data.walls);
    this.traps = Sand.initArray(data.traps);
    this.waters = Water.initArray(data.waters);
    this.dimX = dimX;
    this.dimY = dimY;
    //this is the order from bottom to top, Z-index
    this.subItems = [].concat(this.traps, this.walls, this.waters);
    this.subItems.push(this.hole);
    this.subItems.push(this.ball);
    this.strokeCallback = strokeCallback;
    this.mapOverCallback = mapOverCallback;
}

GolfMap.prototype = Object.create(GameItem.prototype);

GameItem.prototype.toJSON = function() {
    return JSON.stringify(this.mapData);
}

GolfMap.prototype.ballMoving = function() {
    return this.ball.moving();
}

GolfMap.prototype.tick = function(ctx) {
    GameItem.prototype.tick.call(this, ctx);
    if (this.hole.ballInHole(this.ball)) {
        this.mapOverCallback();
    } else if(this.ballInWater()) {
      this.resetBall();
    } 
}

GolfMap.prototype.ballInWater = function(){
  var inWater = false;
  var ball = this.ball;
  this.waters.forEach(function(water){
    if(water.contains(ball)){
      inWater = true;
    }
  });
  return inWater;
}

GolfMap.prototype.resetBall = function(){
  this.ball.loc.x = this.mapData.ballLoc.x;
  this.ball.loc.y = this.mapData.ballLoc.y;
  this.ball.velocity.magnitude = 0;
}

GolfMap.prototype.render = function(ctx) {
    GolfDraw.drawBackground(ctx, {
        width: this.dimX,
        height: this.dimY,
        color: 'green'
    });
    if (this.vector) {
        GolfDraw.drawLine(ctx, {
            color: 'orange',
            width: 2,
            start: this.vector.start,
            end: this.vector.end
        })
    }
}

GolfMap.MINIMUM_SWING_STRENGTH = 8;
GolfMap.prototype.hitBall = function(hitVector) {
    delete this.vector;
    if (hitVector.magnitude < GolfMap.MINIMUM_SWING_STRENGTH) {
        return;
    }
    this.strokeCallback();
    this.ball.hit(hitVector.magnitude, hitVector.direction);
}

GolfMap.GRASS_FRICTION = 0.04;
GolfMap.prototype.frictionAtLoc = function(pos) {
    //arbitrary value
    //intend to figure friction at location and return that
    var friction = GolfMap.GRASS_FRICTION;
    var ball = this.ball;
    this.traps.forEach(function(trap) {
        if (trap.contains(ball)) {
            friction = trap.friction;
        }
    });
    return friction;
}


GolfMap.prototype.drawVector = function(vec) {
    var offsets = vec.toOffsets();
    var start = this.ball.loc;
    this.vector = {
        start: start,
        end: {
            x: start.x + offsets.x,
            y: start.y + offsets.y
        }
    }
}
