function GolfGame(canvas){
  GameStateMachine.call(this, canvas);
  this.modes = [WelcomeScreen, Level];
}

GolfGame.prototype = Object.create(GameStateMachine.prototype);
