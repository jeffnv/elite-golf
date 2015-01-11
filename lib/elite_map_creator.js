function EliteMapCreator($parentEl, payloadReadyCallback){
  GameStateMachine.call(this, $parentEl, payloadReadyCallback);
  this.modes = [WelcomeScreen, MapCreator];
}

EliteMapCreator.prototype = Object.create(GameStateMachine.prototype);
