function Golf(canvas){
  this.ctx = canvas.getContext('2d');
  this.width = canvas.getAttribute('width');
  this.height = canvas.getAttribute('height');
}

Golf.prototype.run = function(canvas){
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(0, 0, this.width, this.height);

}
