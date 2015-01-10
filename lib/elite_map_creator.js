function EliteMapCreator($parentEl, completionCallback){
  GameStateMachine.call(this, $parentEl);
  this.modes = [WelcomeScreen, MapCreator];
}

EliteMapCreator.prototype = Object.create(GameStateMachine.prototype);
