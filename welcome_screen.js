function WelcomeScreen(canvas, changeGameMode) {
    GameMode.call(this, canvas, changeGameMode);

    this.playButtonAttrs = {
      radius: 150, 
      centerX:100,
      centerY: 300,
      color: 'green'
    };

    this.createButtonAttrs = {
      radius: 150, 
      centerX: 400,
      centerY: 300,
      color: 'orange'
    }
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
    this.changeGameMode(GolfStates.PLAY);
  } else if (this.insideButton(clickLoc, this.createButtonAttrs)){
    this.changeGameMode(GolfStates.MAP_CREATOR);
  }
}

WelcomeScreen.prototype.insideButton = function(coords, buttonAttrs){
  var center = {x: buttonAttrs.centerX, y: buttonAttrs.centerY};
  var dist = GolfMath.distBtwPoints(coords, center);
  return dist <= buttonAttrs.radius;
}


WelcomeScreen.prototype.startAction = function() {
    GolfDraw.drawBackground(this.ctx, {width: this.width, height: this.height, color: 'white'});
    GolfDraw.drawText(this.ctx, "CLICK GREEN THING TO GOLF");
    GolfDraw.drawCircle(this.ctx, this.playButtonAttrs);
    GolfDraw.drawCircle(this.ctx, this.createButtonAttrs);
}

WelcomeScreen.prototype.dispose = function() {
  this.removeEvents();
}
