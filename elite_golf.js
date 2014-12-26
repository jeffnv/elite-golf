FPS = 60
SLOW_MODE = false
SLOWNESS_FACTOR = 10//when running at slow mode 1/10th normal speed

GolfStates = {
  WELCOME_SCREEN: 0,
  PLAY: 1
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
}

Golf.prototype.changeState = function(state){
  this.state = state;
  switch(this.state){
    case GolfStates.WELCOME_SCREEN:
      var welcomeMode = new WelcomeScreen(this.canvas, this.changeState.bind(this));
      this.changeMode(welcomeMode);
      break;
    case GolfStates.PLAY:
      var playMode = new Level(this.canvas, this.changeState.bind(this));
      this.changeMode(playMode);
      break;
    default:
      alert('wtf');
      break;
  }
}

Golf.prototype.advanceState = function(){
  var stateCount = Object.keys(GolfStates).length;
  var nextState = (this.state + 1) % stateCount;
  this.changeState(nextState);
}

Golf.prototype.run = function() {
  this.changeState(GolfStates.WELCOME_SCREEN);
}

Golf.prototype.changeMode = function(newMode){
  if(this.currentMode){
    this.currentMode.dispose();
  }

  this.currentMode = newMode;
  this.currentMode.run();
}
