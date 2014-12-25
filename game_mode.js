function GameMode(canvas, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.getAttribute('width');
    this.height = canvas.getAttribute('height');
}

GameMode.prototype.run = function(){
  //sub to events
  //start intervals
}

GameMode.prototype.dispose = function(){
  //unsub from events
  //clear intervals
}

