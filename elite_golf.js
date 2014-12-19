function Golf(canvas){
  this.ctx = canvas.getContext('2d');
  this.width = canvas.getAttribute('width');
  this.height = canvas.getAttribute('height');
}

Golf.prototype.run = function(canvas){
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(0, 0, this.width, this.height);
  setInterval(this.tick.bind(this), 100);
}

Golf.prototype.tick = function(){
  this.level && this.level.tick(this.ctx);
}

Golf.prototype.playLevel = function(level){
  this.level = level;
}

function Level(data){
  this.ball = new Ball(data.ballLoc);
  this.hole = new Hole(data.holeLoc);
  this.subItems = [this.ball, this.hole];
}
Level.prototype = Object.create(GameItem.prototype);

Level.prototype.render = function(ctx){
}


function Ball(loc){
  this.loc = loc;
}

Ball.prototype = Object.create(GameItem.prototype);

Ball.prototype.render = function(context){
  GameItem.drawCircle(context, {
    color: 'white', 
    radius: 5,
    centerX: this.loc.x,
    centerY: this.loc.y
  });
}


function Hole(loc){
  this.loc = loc
}

Hole.prototype = Object.create(GameItem.prototype);

Hole.prototype.render = function(context){
  GameItem.drawCircle(context, {
    color: 'black',
    radius: 10,
    centerX: this.loc.x,
    centerY: this.loc.y
  });
}








