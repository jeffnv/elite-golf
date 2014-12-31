function MapCreator(canvas, endCallback) {
    GameMode.call(this, canvas, endCallback);
    this.tabID = 'map-creator-tab';
    this.events = [];
    this.randomizeButton = document.getElementById('randomizer-button');
    this.generateButton = document.getElementById('generate-button');
    this.loadButton = document.getElementById('load-button');
    this.emptyButton = document.getElementById('empty-button');
    this.ballLocButton = document.getElementById('ball-loc-button');
    this.holeLocButton = document.getElementById('hole-loc-button');
    this.parSelect = document.getElementById('par-select');
    this.addWallButton = document.getElementById('add-wall-button');
    this.addTrapButton = document.getElementById('add-trap-button');
    this.state = MapCreator.STATES.IDLE;
    this.clicks = [];
}

MapCreator.prototype = Object.create(GameMode.prototype);

MapCreator.prototype.registerEvents = function() {
    this.addEvent(this.canvas, 'mousedown', this.handleMapClick);
    this.addEvent(this.randomizeButton, 'click', this.randomize);
    this.addEvent(this.generateButton, 'click', this.generateData);
    this.addEvent(this.loadButton, 'click', this.loadData);
    this.addEvent(this.parSelect, 'change', this.setPar);
    this.addEvent(this.emptyButton, 'click', this.loadEmptyMap);
    this.addEvent(
        this.ballLocButton,
        'click',
        this.changeState.bind(this, MapCreator.STATES.BALL_LOC)
    );
    this.addEvent(
        this.holeLocButton,
        'click',
        this.changeState.bind(this, MapCreator.STATES.HOLE_LOC)
    );
    this.addEvent(
        this.addWallButton,
        'click',
        this.changeState.bind(this, MapCreator.STATES.ADD_WALL)
    );
    this.addEvent(
        this.addTrapButton,
        'click',
        this.changeState.bind(this, MapCreator.STATES.ADD_TRAP)
    );
}

MapCreator.prototype.setPar = function() {
    this.mapData.par = this.selectedPar();
}

MapCreator.prototype.changeState = function(newState) {
    this.state = newState;
    this.clicks = [];
    this.loadMap();
}
MapCreator.prototype.loadEmptyMap = function() {
    this.mapData = MapBuilder.emptyMap();
    this.loadMap();
}

MapCreator.prototype.loadMap = function() {
    this.map = new GolfMap(this.mapData, this.width, this.height);
    this.map.tick(this.ctx);
}

MapCreator.prototype.setBallLoc = function() {
    this.mapData.ballLoc = this.clicks.pop();
    this.changeState(MapCreator.STATES.IDLE);
}
MapCreator.prototype.setHoleLoc = function() {
    this.mapData.holeLoc = this.clicks.pop();
    this.changeState(MapCreator.STATES.IDLE);
}
MapCreator.prototype.addWall = function() {
    if (this.clicks.length == 2) {
        this.mapData.walls.push({
            start: {
                x: this.clicks[0].x,
                y: this.clicks[0].y
            },
            end: {
                x: this.clicks[1].x,
                y: this.clicks[1].y
            }
        });
        this.changeState(MapCreator.STATES.IDLE);
    }
}

MapCreator.prototype.addTrap = function() {
    if (this.clicks.length == 2) {
        this.mapData.traps.push({
            topLeft: {
                x: this.clicks[0].x,
                y: this.clicks[0].y
            },
            bottomRight: {
                x: this.clicks[1].x,
                y: this.clicks[1].y
            }
        });
        this.changeState(MapCreator.STATES.IDLE);
    }
}

MapCreator.STATES = {
    IDLE: 0,
    BALL_LOC: 1,
    HOLE_LOC: 2,
    ADD_TRAP: 3,
    ADD_WALL: 4
}
MapCreator.prototype.handleMapClick = function(event) {
    var coords = {
        x: event.offsetX,
        y: event.offsetY
    };
    this.clicks.push(coords);
    switch (this.state) {
        case MapCreator.STATES.IDLE:
            alert('idle');
            break;
        case MapCreator.STATES.BALL_LOC:
            this.setBallLoc();
            break;
        case MapCreator.STATES.HOLE_LOC:
            this.setHoleLoc();
            break;
        case MapCreator.STATES.ADD_WALL:
            this.addWall();
            break;
        case MapCreator.STATES.ADD_TRAP:
            this.addTrap();
            break;
        default:
            alert('wtf?');
            break;
    }

}

MapCreator.prototype.loadData = function() {
    var data = document.getElementById('load-data').value;
    this.mapData = JSON.parse(data);
    this.loadMap();
}


MapCreator.prototype.generateData = function() {
    var dataBox = document.getElementById('map-data');
    dataBox.innerText = this.map.toJSON();
}

MapCreator.prototype.selectedPar = function() {
    var select = document.getElementById('par-select');
    return parseInt(select.value);
}

MapCreator.prototype.randomize = function() {
    this.mapData = MapBuilder.randomMap();
    this.loadMap();
}


MapCreator.prototype.startAction = function() {
    this.loadEmptyMap();
}
