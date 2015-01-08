function GolfMapCreator(canvas){
  GameStateMachine.call(this, canvas);
  this.modes = [WelcomeScreen, MapCreator];
}

GolfMapCreator.prototype = Object.create(GameStateMachine.prototype);
