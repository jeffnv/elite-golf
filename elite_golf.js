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
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 20;

  context.beginPath();
  context.arc(this.loc.x, this.loc.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
}


function Hole(loc){
  this.loc = loc
}

Hole.prototype = Object.create(GameItem.prototype);

Hole.prototype.render = function(context){
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 20;

  context.beginPath();
  context.arc(this.loc.x, this.loc.y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'black';
  context.fill();
}








