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
  this.endCallback();
}


WelcomeScreen.prototype.startAction = function() {
    GolfDraw.drawCircle(this.ctx, {
        color: 'green',
        radius: 150,
        centerX: this.width / 2,
        centerY: this.height / 2
    });
}

WelcomeScreen.prototype.dispose = function() {
    this.canvas.removeEventListener(
        'mousedown',
        this.clickCallback
    );
}
