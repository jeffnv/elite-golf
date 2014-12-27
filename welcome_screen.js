function WelcomeScreen(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
}

WelcomeScreen.prototype = Object.create(GameMode.prototype);

WelcomeScreen.prototype.registerEvents = function() {
    var that = this;
    this.clickCallback = this.handleClick.bind(this);
    this.canvas.addEventListener(
        'mousedown',
        this.clickCallback,
        false
    );
}

WelcomeScreen.prototype.handleClick = function(event){
  event.preventDefault();
  //figure out which thing was clicked on, trigger appropriately 
  this.endCallback(GolfStates.PLAY);
}


WelcomeScreen.prototype.startAction = function() {
    GolfDraw.drawBackground(this.ctx, {width: this.width, height: this.height, color: 'white'});
    GolfDraw.drawCircle(this.ctx, {
        color: 'green',
        radius: 150,
        centerX: this.width / 2,
        centerY: this.height / 2
    });
    GolfDraw.drawText(this.ctx, "CLICK ANYWHERE TO GOLF");
}

WelcomeScreen.prototype.dispose = function() {
    this.canvas.removeEventListener(
        'mousedown',
        this.clickCallback
    );
}
