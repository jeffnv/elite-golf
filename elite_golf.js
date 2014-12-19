function Golf(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
}

Golf.prototype.run = function(canvas) {
    this.registerEvents(canvas);
    setInterval(this.tick.bind(this), 25);
}

Golf.prototype.registerEvents = function() {
    canvas.addEventListener(
        'mousedown',
        this.handleMouseDown.bind(this),
        false
    );
}

Golf.prototype.handleMouseDown = function(event) {
    var clickStart = {
        x: event.x,
        y: event.y
    };
    var that = this;

    function releaseHandler(event) {
        var clickEnd = {
            x: event.x,
            y: event.y
        };
        that.canvas.removeEventListener('mouseup', releaseHandler);
        that.handleDrag(clickStart, clickEnd);
    };
    this.canvas.addEventListener(
        'mouseup',
        releaseHandler,
        false
    );
}

Golf.prototype.handleDrag = function(clickStart, clickEnd) {
    this.level && this.level.hitBall(clickStart, clickEnd);
}

Golf.prototype.tick = function() {
    this.level && this.level.tick(this.ctx);
}

Golf.prototype.playLevel = function(level) {
    this.level = level;
}

function Level(data, dimX, dimY) {
    this.ball = new Ball(data.ballLoc);
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
  var nY = dy / force;
  var nX = dx / force;
  this.ball.hit(force, nX, nY);
}

function Ball(loc) {
    this.loc = loc;
    this.velocity = {x: 0, y: 0};
}

Ball.prototype = Object.create(GameItem.prototype);

Ball.prototype.render = function(context) {
    GameItem.drawCircle(context, {
        color: 'white',
        radius: 5,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}

Ball.prototype.hit = function(force, nX, nY){
  var forceMultiplier = force / 20;
  var vX = nX * forceMultiplier * -1;
  var vY = nY * forceMultiplier * -1;
  this.velocity = {x: vX, y: vY};
}
Ball.prototype.move = function(){
  this.loc.x += this.velocity.x;
  this.loc.y += this.velocity.y;
}


function Hole(loc) {
    this.loc = loc
}

Hole.prototype = Object.create(GameItem.prototype);

Hole.prototype.render = function(context) {
    GameItem.drawCircle(context, {
        color: 'black',
        radius: 10,
        centerX: this.loc.x,
        centerY: this.loc.y
    });
}
