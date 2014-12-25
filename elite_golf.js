FPS = 60
SLOW_MODE = false
SLOWNESS_FACTOR = 10//when running at slow mode 1/10th normal speed

GolfStates = {
  WELCOME_SCREEN: 1,
  PLAY: 2
}

function toggleSlowMode(event){
  //runs the game at 1/10th speed for debugging
  //see line 21
  SLOW_MODE = !SLOW_MODE;
}

function Golf(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.state = GolfStates.PLAY;
}

Golf.prototype.changeState = function(state){
  this.state = state;
  switch(this.state){
    case GolfStates.WELCOME_SCREEN:
      //coming soon
      break;
    case GolfStates.PLAY:
      var playMode = new Level(this.canvas, this.width, this.height);
      this.changeMode(playMode);
      break;
    default:
      alert('wtf');
      break;
  }
}

Golf.prototype.run = function() {
  this.changeState(GolfStates.PLAY);
}

Golf.prototype.changeMode = function(newMode){
  if(this.currentMode){
    this.currentMode.dispose();
  }
  this.currentMode = newMode;
  this.currentMode.run();
}
