function WelcomeScreen(canvas, $gameModeSpace, changeGameMode) {
    GameMode.call(this, canvas, $gameModeSpace, changeGameMode);

    this.playButtonAttrs = {
      radius: 150, 
      centerX: 250,
      centerY: 250,
      color: 'green'
    };
};

WelcomeScreen.prototype = Object.create(GameMode.prototype);

WelcomeScreen.prototype.registerEvents = function() {
  this.addEvent(this.canvas, 'mousedown', this.handleClick);
}

WelcomeScreen.prototype.handleClick = function(event){
  event.preventDefault();
  //figure out which thing was clicked on, trigger appropriately
  var clickLoc = {x: event.offsetX, y: event.offsetY};
  if(this.insideButton(clickLoc, this.playButtonAttrs)){
    this.changeGameMode();
  }
}

WelcomeScreen.prototype.insideButton = function(coords, buttonAttrs){
  var center = {x: buttonAttrs.centerX, y: buttonAttrs.centerY};
  var dist = GolfMath.distBtwPoints(coords, center);
  return dist <= buttonAttrs.radius;
}


WelcomeScreen.prototype.startAction = function() {
    GolfDraw.drawBackground(this.ctx, {width: this.width, height: this.height, color: 'white'});
    GolfDraw.drawText(this.ctx, "CLICK GREEN THING");
    GolfDraw.drawCircle(this.ctx, this.playButtonAttrs);
}

