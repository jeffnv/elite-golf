GameItem = function(options){
  this.properties = {}.extend(options);
}

GameItem.prototype.tick = function(ctx){
  if(this.subItems){
    this.subItems.forEach(function(item){ item.tick(ctx)});
  }
  this.move && this.move();
  this.render(ctx);
}

GameItem.prototype.render = function(ctx){
}
