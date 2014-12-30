function MapCreator(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.tabID = 'map-creator-tab';
    this.events = [];
    this.randomizeButton = document.getElementById('randomizer');
}

MapCreator.prototype = Object.create(GameMode.prototype);

MapCreator.prototype.registerEvents = function() {
    this.addEvent(this.canvas, 'mousedown', this.handleMapClick);
    this.addEvent(this.randomizeButton, 'click', this.randomize);
}

MapCreator.prototype.randomize = function(){
  alert('random'); 
}

MapCreator.prototype.handleMapClick = function() {
    alert('click');
}

MapCreator.prototype.startAction = function() {
    GolfDraw.drawBackground(this.ctx, {
        width: this.width,
        height: this.height,
        color: 'white'
    });
}

