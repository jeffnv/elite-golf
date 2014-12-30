function MapCreator(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.tabID = 'map-creator-tab';
    this.events = [];
    this.randomizeButton = document.getElementById('randomizer');
    this.generateButton = document.getElementById('generate-button');
    this.loadButton = document.getElementById('load-button');
}

MapCreator.prototype = Object.create(GameMode.prototype);

MapCreator.prototype.registerEvents = function() {
    this.addEvent(this.canvas, 'mousedown', this.handleMapClick);
    this.addEvent(this.randomizeButton, 'click', this.randomize);
    this.addEvent(this.generateButton, 'click', this.generateData);
    this.addEvent(this.loadButton, 'click', this.loadData);
}

MapCreator.prototype.loadData = function() {
    var data = document.getElementById('load-data').value;
    this.loadMap(JSON.parse(data));
}

MapCreator.prototype.loadMapFromJSON = function(json) {}

MapCreator.prototype.generateData = function() {
    var dataBox = document.getElementById('map-data');
    dataBox.innerText = this.map.toJSON();
}

MapCreator.prototype.selectedPar = function() {
    var select = document.getElementById('par-select');
    return parseInt(select.value);
}

MapCreator.prototype.randomize = function() {
    this.loadMap(MapBuilder.randomMap());
}
MapCreator.prototype.loadMap = function(data) {
    this.map = new GolfMap(data, this.width, this.height);
    this.map.tick(this.ctx);
}

MapCreator.prototype.handleMapClick = function() {}

MapCreator.prototype.startAction = function() {
    GolfDraw.drawBackground(this.ctx, {
        width: this.width,
        height: this.height,
        color: 'white'
    });
}
