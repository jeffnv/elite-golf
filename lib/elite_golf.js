function EliteGolf($parentEl, completionCallback){
  GameStateMachine.call(this, $parentEl);
  this.modes = [WelcomeScreen, Level];
  this.completionCallback = completionCallback;
}

EliteGolf.prototype = Object.create(GameStateMachine.prototype);

