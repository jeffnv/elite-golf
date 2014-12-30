function MapCreator(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.tabID = 'map-creator-tab';
}

MapCreator.prototype = Object.create(GameMode.prototype);
MapCreator.prototype.addRandomButton = function(){
  var button = document.createElement('button');
  button.setAttribute('id', 'randomizer');
}

MapCreator.prototype.registerEvents = function(){
    this.clickCallback = this.handleClick.bind(this);
    this.canvas.addEventListener(
        'mousedown',
        this.clickCallback,
        false
    );
}

MapCreator.prototype.startAction = function(){
}

MapCreator.prototype.dispose = function(){
}
