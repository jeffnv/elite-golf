import GameMode from "../base_classes/game_mode";
import GolfMap from "../game_modes/golf_map";
import MapBuilder from "../util/map_builder";
// import GameStateMachine from "../base_classes/game_state_machine";
const STATES = {
  IDLE: 0,
  BALL_LOC: 1,
  HOLE_LOC: 2,
  ADD_TRAP: 3,
  ADD_WALL: 4,
  ADD_WATER: 5
}
export default class MapCreator extends GameMode {
  constructor(canvas, $gameModeSpace, changeGameMode) {
    super(canvas, $gameModeSpace, changeGameMode);
    this.tabID = 'map-creator-tab';
    this.events = [];
    this.state = STATES.IDLE;
    this.clicks = [];
    this.undo_stack = [];
  }

  buildHTMLElements() {
    this.addButtons();
    this.$gameModeSpace.append('<br>');
    this.$gameModeSpace.append('<label>Par</label>');
    var $parSelect = $('<select id="par-select"></select>');
    for (var i = 1; i < 10; i++) {
      $parSelect.append('<option value="' + i + '">' + i + '</option>');
    }
    this.$gameModeSpace.append($parSelect);
    this.parSelect = $parSelect[0];
    this.$gameModeSpace.append("<label>Load Data</label>");
    this.$gameModeSpace.append("<textarea id='load-data'></textarea>");

  }
  addButtons() {
    var actions = [
      'randomize',
      'generate',
      'load',
      'empty',
      'ballLoc',
      'holeLoc',
      'addWall',
      'addTrap',
      'addWater',
      'undo',
      'publish'
    ];
    var that = this;
    actions.forEach(function (buttonType) {
      var $button = $('<button class="map-button">' + buttonType + '</button>');
      //build button jquery element
      that.$gameModeSpace.append($button);
      //add it to the DOM
      that[buttonType + 'Button'] = $button[0];
      //save a reference as an instance var so we can access it later
    });
  }

  undoLastChange() {
    if (this.clicks.length > 0) {
      this.clicks = [];
    } else if (this.undo_stack.length > 0) {
      //stack of migrations
      this.undo_stack.pop()();
      //undo the last operation
      this.changeState(STATES.IDLE);
    }
  }

  registerEvents() {
    this.addEvent(this.canvas, 'mousedown', this.handleMapClick);
    this.addEvent(this.publishButton, 'click', this.publishMap);
    this.addEvent(this.randomizeButton, 'click', this.randomize);
    this.addEvent(this.loadButton, 'click', this.loadData);
    this.addEvent(this.emptyButton, 'click', this.loadEmptyMap);
    this.addEvent(this.undoButton, 'click', this.undoLastChange);
    this.addEvent(
      this.ballLocButton,
      'click',
      this.changeState.bind(this, STATES.BALL_LOC)
    );
    this.addEvent(
      this.holeLocButton,
      'click',
      this.changeState.bind(this, STATES.HOLE_LOC)
    );
    this.addEvent(
      this.addWallButton,
      'click',
      this.changeState.bind(this, STATES.ADD_WALL)
    );
    this.addEvent(
      this.addTrapButton,
      'click',
      this.changeState.bind(this, STATES.ADD_TRAP)
    );
    this.addEvent(
      this.addWaterButton,
      'click',
      this.changeState.bind(this, STATES.ADD_WATER)
    );
  }

  changeState(newState) {
    this.state = newState;
    this.clicks = [];
    this.loadMap();
  }
  loadEmptyMap() {
    this.mapData = MapBuilder.emptyMap();
    this.loadMap();
  }

  loadMap() {
    this.map = new GolfMap(this.mapData, this.width, this.height);
    this.map.tick(this.ctx);
  }

  setBallLoc() {
    var oldLoc = this.mapData.ballLoc;
    var undoFunc = function () {
      this.mapData.ballLoc = oldLoc;
    }.bind(this);

    this.undo_stack.push(undoFunc);
    this.mapData.ballLoc = this.clicks.pop();
    this.changeState(STATES.IDLE);
  }

  setHoleLoc() {
    var oldLoc = this.mapData.holeLoc;
    var undoFunc = function () {
      this.mapData.holeLoc = oldLoc;
    }.bind(this);
    this.undo_stack.push(undoFunc);
    this.mapData.holeLoc = this.clicks.pop();
    this.changeState(STATES.IDLE);
  }

  addWall() {
    if (this.clicks.length == 2) {
      var undoFunc = function () {
        this.mapData.walls.pop();
      }.bind(this);
      this.undo_stack.push(undoFunc);
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
      this.changeState(STATES.IDLE);

    }
  }

  addTrap() {
    if (this.clicks.length == 2) {
      var undoFunc = function () {
        this.mapData.traps.pop();
      }.bind(this);
      this.undo_stack.push(undoFunc);
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
      this.changeState(STATES.IDLE);
    }
  }

  addWater() {
    if (this.clicks.length == 2) {
      var undoFunc = function () {
        this.mapData.waters.pop();
      }.bind(this);
      this.undo_stack.push(undoFunc);
      this.mapData.waters.push({
        topLeft: {
          x: this.clicks[0].x,
          y: this.clicks[0].y
        },
        bottomRight: {
          x: this.clicks[1].x,
          y: this.clicks[1].y
        }
      });
      this.changeState(STATES.IDLE);
    }
  }

  handleMapClick(event) {
    var coords = {
      x: event.offsetX,
      y: event.offsetY
    };
    this.clicks.push(coords);
    switch (this.state) {
      case STATES.IDLE:
        alert('click a button below to add features');
        break;
      case STATES.BALL_LOC:
        this.setBallLoc();
        break;
      case STATES.HOLE_LOC:
        this.setHoleLoc();
        break;
      case STATES.ADD_WALL:
        this.addWall();
        break;
      case STATES.ADD_TRAP:
        this.addTrap();
        break;
      case STATES.ADD_WATER:
        this.addWater();
        break;
      default:
        alert('wtf?');
        break;
    }

  }

  loadData() {
    var data = document.getElementById('load-data').value;
    this.mapData = JSON.parse(data);
    this.loadMap();
  }


  publishMap() {
    var par = this.selectedPar();
    this.map.mapData.par = par;
    //we are done, we can publish this map now
    this.changeGameMode({ par: par, mapJSON: this.map.toJSON() });
  }

  selectedPar() {
    var select = document.getElementById('par-select');
    return parseInt(select.value);
  }

  randomize() {
    this.mapData = MapBuilder.randomMap();
    this.loadMap();
  }

  startAction() {
    this.loadEmptyMap();
  }

};
