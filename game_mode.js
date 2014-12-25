function GameMode(canvas, endCallback ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
    this.endCallback = endCallback;

}

GameMode.prototype.run = function(){
  this.registerEvents && this.registerEvents();
  this.startAction && this.startAction();
}

GameMode.prototype.dispose = function(){
  //unsub from events
  //clear intervals
}

