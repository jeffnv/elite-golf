function GameStateMachine(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.modeIndex = 0;
}

GameStateMachine.prototype.changeMode = function(newModeIndex){
  this.modeIndex = newModeIndex;
  var modeClass = this.modes[this.modeIndex];
  if(modeClass){
    var mode = new modeClass(this.canvas, this.advanceMode.bind(this));
    this.swapCurrentMode(mode);
  } else {
    alert("wtf is this?" + state);
  }
}

GameStateMachine.prototype.advanceMode = function(){
  this.changeMode((this.modeIndex + 1) % this.modes.length);
}

GameStateMachine.prototype.run = function() {
  //always start with the first mode
  this.changeMode(0);
}

GameStateMachine.prototype.swapCurrentMode = function(newMode){
  if(this.currentMode){
    this.currentMode.dispose();
  }
  this.currentMode = newMode;
  this.currentMode.run();
}
