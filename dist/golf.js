/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/elite_golf.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/base_classes/game_item.js":
/*!***************************************!*\
  !*** ./lib/base_classes/game_item.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameItem; });\nfunction GameItem(options) {\n    this.properties = {}.extend(options);\n}\n\nGameItem.prototype.tick = function(ctx) {\n    this.move && this.move();\n    this.render(ctx);\n    if (this.subItems) {\n        this.subItems.forEach(function(item) {\n            item.tick(ctx)\n        });\n    }\n}\n\nGameItem.prototype.render = function(ctx) {}\n\n\n//# sourceURL=webpack:///./lib/base_classes/game_item.js?");

/***/ }),

/***/ "./lib/base_classes/game_mode.js":
/*!***************************************!*\
  !*** ./lib/base_classes/game_mode.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMode; });\nfunction GameMode(canvas, $gameModeSpace, changeGameMode) {\n    this.canvas = canvas;\n    this.$gameModeSpace = $gameModeSpace;\n    this.ctx = canvas.getContext('2d');\n    this.width = canvas.getAttribute('width');\n    this.height = canvas.getAttribute('height');\n    this.changeGameMode = changeGameMode;\n    this.events = [];\n    this.$gameModeSpace.empty();\n    this.buildHTMLElements();\n}\n\nGameMode.prototype.run = function() {\n    this.registerEvents();\n    this.startAction();\n}\n\nGameMode.prototype.buildHTMLElements = function(){\n  //implement in child classes, append to this.$gameModeSpace\n}\n\n\nGameMode.prototype.registerEvents = function() {\n    //click handlers and whatnot\n}\n\nGameMode.prototype.addEvent = function(element, eventName, callback) {\n    var boundCallback = callback.bind(this);\n    element.addEventListener(\n        eventName,\n        boundCallback,\n        false\n    );\n\n    //so we can easily unsubscribe later\n    this.events.push({\n        el: element,\n        eventName: eventName,\n        callback: boundCallback\n    });\n}\nGameMode.prototype.removeEvents = function() {\n    this.events.forEach(function(eventData) {\n            eventData.el.removeEventListener(\n                eventData.eventName,\n                eventData.callback\n            );\n    });\n}\nGameMode.prototype.startAction = function() {\n    //WRITE IN CHILD CLASS\n    //start intervals (and store their ids)\n}\n\nGameMode.prototype.dispose = function() {\n    //if intervals are set, overwrite in child class\n    this.removeEvents()\n}\n\n\n//# sourceURL=webpack:///./lib/base_classes/game_mode.js?");

/***/ }),

/***/ "./lib/base_classes/game_state_machine.js":
/*!************************************************!*\
  !*** ./lib/base_classes/game_state_machine.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameStateMachine; });\nfunction GameStateMachine($parentEl, payloadReadyCallback) {\n    this.$parentEl = $parentEl;\n    this.payloadReadyCallback = payloadReadyCallback;\n    this.createCoreElements();\n    this.ctx = this.canvas.getContext('2d');\n    this.width = this.canvas.getAttribute('width');\n    this.height = this.canvas.getAttribute('height');\n    this.modeIndex = 0;\n}\n\nGameStateMachine.prototype.createCoreElements = function() {\n    var $canvas = $('<canvas class=\"game-canvas\" width=\"500\" height=\"500\"></canvas>');\n    this.$parentEl.append($canvas);\n    this.canvas = $canvas[0];\n    this.$gameModeSpace = $('<div class=\"game-mode-space\"></div>');\n    this.$parentEl.append(this.$gameModeSpace);\n}\n\nGameStateMachine.prototype.changeMode = function(newModeIndex) {\n    this.modeIndex = newModeIndex;\n    var modeClass = this.modes[this.modeIndex];\n    if (modeClass) {\n        var mode = new modeClass(\n            this.canvas,\n            this.$gameModeSpace,\n            this.advanceMode.bind(this)\n        );\n        this.swapCurrentMode(mode);\n    } else {\n        alert(\"wtf is this?\" + state);\n    }\n}\n\nGameStateMachine.prototype.advanceMode = function(payload) {\n    //usually used for a final score object or a map\n    if (payload) {\n        this.payloadReadyCallback(payload);\n    }\n    this.changeMode((this.modeIndex + 1) % this.modes.length);\n}\n\nGameStateMachine.prototype.run = function() {\n    //always start with the first mode\n    this.changeMode(0);\n}\n\nGameStateMachine.prototype.swapCurrentMode = function(newMode) {\n    if (this.currentMode) {\n        this.currentMode.dispose();\n    }\n    this.currentMode = newMode;\n    this.currentMode.run();\n}\n\n\n\n//# sourceURL=webpack:///./lib/base_classes/game_state_machine.js?");

/***/ }),

/***/ "./lib/elite_golf.js":
/*!***************************!*\
  !*** ./lib/elite_golf.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EliteGolf; });\n/* harmony import */ var _base_classes_game_state_machine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_classes/game_state_machine */ \"./lib/base_classes/game_state_machine.js\");\n/* harmony import */ var _game_modes_welcome_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_modes/welcome_screen */ \"./lib/game_modes/welcome_screen.js\");\n/* harmony import */ var _game_modes_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_modes/level */ \"./lib/game_modes/level.js\");\n\n\n\n\nfunction EliteGolf($parentEl, completionCallback){\n  _base_classes_game_state_machine__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, $parentEl, completionCallback);\n  this.modes = [_game_modes_welcome_screen__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _game_modes_level__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n  this.completionCallback = completionCallback;\n}\n\nEliteGolf.prototype = Object.create(_base_classes_game_state_machine__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\n\nwindow.EliteGolf = EliteGolf;\n\n//# sourceURL=webpack:///./lib/elite_golf.js?");

/***/ }),

/***/ "./lib/game_modes/golf_map.js":
/*!************************************!*\
  !*** ./lib/game_modes/golf_map.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GolfMap; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _items_ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/ball */ \"./lib/items/ball.js\");\n/* harmony import */ var _items_wall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/wall */ \"./lib/items/wall.js\");\n/* harmony import */ var _items_hole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/hole */ \"./lib/items/hole.js\");\n/* harmony import */ var _items_sand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/sand */ \"./lib/items/sand.js\");\n/* harmony import */ var _items_water__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/water */ \"./lib/items/water.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n\n\n\n\n\n\n\nfunction GolfMap(data, dimX, dimY, strokeCallback, mapOverCallback) {\n    this.mapData = data;\n    this.ball = new _items_ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data.ballLoc, this);\n    this.hole = new _items_hole__WEBPACK_IMPORTED_MODULE_3__[\"default\"](data.holeLoc);\n    this.walls = _items_wall__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initArray(data.walls);\n    this.traps = _items_sand__WEBPACK_IMPORTED_MODULE_4__[\"default\"].initArray(data.traps);\n    this.waters = _items_water__WEBPACK_IMPORTED_MODULE_5__[\"default\"].initArray(data.waters);\n    this.dimX = dimX;\n    this.dimY = dimY;\n    //this is the order from bottom to top, Z-index\n    this.subItems = [].concat(this.traps, this.walls, this.waters);\n    this.subItems.push(this.hole);\n    this.subItems.push(this.ball);\n    this.strokeCallback = strokeCallback;\n    this.mapOverCallback = mapOverCallback;\n}\n\nGolfMap.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\n_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.toJSON = function() {\n    return JSON.stringify(this.mapData);\n}\n\nGolfMap.prototype.ballMoving = function() {\n    return this.ball.moving();\n}\n\nGolfMap.prototype.tick = function(ctx) {\n    _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.tick.call(this, ctx);\n    this.renderVector(ctx);\n    if (this.hole.ballInHole(this.ball)) {\n        this.mapOverCallback();\n    } else if (this.ballInWater()) {\n        this.resetBall();\n    } else if (this.ballOffMap()) {\n        alert('Cool it, Hercules.');\n        this.resetBall();\n    }\n}\n\nGolfMap.prototype.ballInWater = function() {\n    var inWater = false;\n    var ball = this.ball;\n    this.waters.forEach(function(water) {\n        if (water.contains(ball)) {\n            inWater = true;\n        }\n    });\n    return inWater;\n}\n\n\nGolfMap.prototype.ballOffMap = function() {\n    return (this.ball.loc.x > this.dimX) ||\n           (this.ball.loc.x < 0) ||\n           (this.ball.loc.y > this.dimY) ||\n           (this.ball.loc.y < 0);\n}\n\nGolfMap.prototype.resetBall = function() {\n    this.ball.loc.x = this.mapData.ballLoc.x;\n    this.ball.loc.y = this.mapData.ballLoc.y;\n    this.ball.velocity.magnitude = 0;\n}\n\nGolfMap.prototype.render = function(ctx) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_6__[\"default\"].drawBackground(ctx, {\n        width: this.dimX,\n        height: this.dimY,\n        color: 'green'\n    });\n}\nGolfMap.prototype.renderVector = function(ctx) {\n    if (this.vector) {\n        _util_golf_draw__WEBPACK_IMPORTED_MODULE_6__[\"default\"].drawLine(ctx, {\n            color: 'aquamarine',\n            width: 2,\n            start: this.vector.start,\n            end: this.vector.end\n        })\n    }\n}\n\nGolfMap.MINIMUM_SWING_STRENGTH = 8;\nGolfMap.prototype.hitBall = function(hitVector) {\n    delete this.vector;\n    if (hitVector.magnitude < GolfMap.MINIMUM_SWING_STRENGTH) {\n        return;\n    }\n    this.strokeCallback();\n    this.ball.hit(hitVector.magnitude, hitVector.direction);\n}\n\nGolfMap.GRASS_FRICTION = 0.04;\nGolfMap.prototype.frictionAtLoc = function(pos) {\n    //arbitrary value\n    //intend to figure friction at location and return that\n    var friction = GolfMap.GRASS_FRICTION;\n    var ball = this.ball;\n    this.traps.forEach(function(trap) {\n        if (trap.contains(ball)) {\n            friction = trap.friction;\n        }\n    });\n    return friction;\n}\n\n\nGolfMap.prototype.drawVector = function(vec) {\n    var offsets = vec.toOffsets();\n    var start = this.ball.loc;\n    this.vector = {\n        start: start,\n        end: {\n            x: start.x + offsets.x,\n            y: start.y + offsets.y\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/game_modes/golf_map.js?");

/***/ }),

/***/ "./lib/game_modes/level.js":
/*!*********************************!*\
  !*** ./lib/game_modes/level.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_mode */ \"./lib/base_classes/game_mode.js\");\n/* harmony import */ var _game_modes_score_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game_modes/score_card */ \"./lib/game_modes/score_card.js\");\n/* harmony import */ var _game_modes_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game_modes/maps */ \"./lib/game_modes/maps.js\");\n/* harmony import */ var _game_modes_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_modes_maps__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _game_modes_golf_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game_modes/golf_map */ \"./lib/game_modes/golf_map.js\");\n/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/vector */ \"./lib/util/vector.js\");\n\n\n\n\n\n\nfunction Level(canvas, $gameModeSpace, changeGameMode) {\n    _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, canvas, $gameModeSpace, changeGameMode);\n    this.scoreCard = new _game_modes_score_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$gameModeSpace.find('table'));\n    this.mapIndex = 0;\n    this.loadPar();\n    this.loadMap();\n}\n\n\nLevel.FPS = 60;\n\nLevel.prototype = Object.create(_base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nLevel.prototype.buildHTMLElements = function() {\n    var $scoreCard = $('<table class=\"table table-condensed table-bordered\" id=\"score\"></table>');\n    $scoreCard.append('<tr class=\"hole-row\"><th></th></tr>');\n    $scoreCard.append('<tr class=\"par-row\"><th>Par</th></tr>');\n    $scoreCard.append('<tr class=\"strokes-row\"><th>Strokes</th></tr>');\n    this.$gameModeSpace.append($scoreCard);\n}\n\nLevel.prototype.loadPar = function() {\n    var that = this;\n    _game_modes_maps__WEBPACK_IMPORTED_MODULE_2___default.a.forEach(function(map, i) {\n        that.scoreCard.addHole(i + 1, map.par);\n    });\n}\n\nLevel.prototype.playNextMap = function() {\n    this.mapIndex++;\n    //should check to see if we are out of maps\n    if (this.mapIndex < _game_modes_maps__WEBPACK_IMPORTED_MODULE_2___default.a.length) {\n        this.loadMap();\n    } else {\n        var score = this.scoreCard.totalScore();\n        var par = this.scoreCard.totalPar();\n\n        this.changeGameMode({\n            score: score,\n            par: par\n        });\n    }\n}\n\nLevel.prototype.dispose = function() {\n    clearInterval(this.intervalID);\n    this.removeEvents();\n}\n\nLevel.prototype.loadMap = function() {\n    this.map = new _game_modes_golf_map__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        _game_modes_maps__WEBPACK_IMPORTED_MODULE_2___default.a[this.mapIndex],\n        this.width,\n        this.height,\n        this.logStroke.bind(this),\n        this.playNextMap.bind(this)\n    );\n}\n\nLevel.prototype.logStroke = function() {\n    this.scoreCard.logStroke(this.mapIndex);\n}\n\nLevel.prototype.startAction = function() {\n    this.intervalID = setInterval(\n        this.tick.bind(this),\n        1000 / Level.FPS\n    );\n}\n\nLevel.prototype.registerEvents = function() {\n    this.boundMouseHandler = this.handleMouseDown.bind(this);\n    this.canvas.addEventListener(\n        'mousedown',\n        this.boundMouseHandler,\n        false\n    );\n}\n\nLevel.prototype.handleMouseDown = function(event) {\n    //no hitting moving balls\n    if (this.map.ballMoving()) {\n        return;\n    }\n    var clickStart = {\n        x: event.x,\n        y: event.y\n    };\n    var that = this;\n\n    function dragHandler(event) {\n        var currentPos = {\n            x: event.x,\n            y: event.y\n        };\n        that.drawVector(clickStart, currentPos);\n    }\n\n    function releaseHandler(event) {\n        var clickEnd = {\n            x: event.x,\n            y: event.y\n        };\n        that.canvas.removeEventListener('mouseup', releaseHandler);\n        that.canvas.removeEventListener('mousemove', dragHandler);\n        that.handleRelease(clickStart, clickEnd);\n    };\n    this.canvas.addEventListener(\n        'mouseup',\n        releaseHandler,\n        false\n    );\n    this.canvas.addEventListener(\n        'mousemove',\n        dragHandler,\n        false\n    );\n}\n\nLevel.prototype.drawVector = function(start, end) {\n    var vector = _util_vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromCoords(start, end);\n    this.map && this.map.drawVector(vector);\n}\nLevel.prototype.handleRelease = function(clickStart, clickEnd) {\n    var vector = _util_vector__WEBPACK_IMPORTED_MODULE_4__[\"default\"].fromCoords(clickStart, clickEnd);\n    //want to hit ball in opposite direction from the drag\n    //angry birds style\n    vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);\n    this.map && this.map.hitBall(vector);\n}\n\nLevel.prototype.tick = function() {\n    this.map && this.map.tick(this.ctx);\n}\n\n\n//# sourceURL=webpack:///./lib/game_modes/level.js?");

/***/ }),

/***/ "./lib/game_modes/maps.js":
/*!********************************!*\
  !*** ./lib/game_modes/maps.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MAPS = [];\n\nvar empty = JSON.parse('{\"par\":2,\"ballLoc\":{\"x\":78,\"y\":429},\"holeLoc\":{\"x\":421,\"y\":75},\"traps\":[],\"waters\":[],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}}]}');\n\nvar justWall = JSON.parse('{\"par\":2,\"ballLoc\":{\"x\":68,\"y\":455},\"holeLoc\":{\"x\":130,\"y\":460},\"traps\":[],\"waters\":[],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":90,\"y\":499},\"end\":{\"x\":129,\"y\":117}},{\"start\":{\"x\":250,\"y\":269},\"end\":{\"x\":389,\"y\":367}}]}');\nvar sandAndWall = JSON.parse('{\"par\":3,\"ballLoc\":{\"x\":67,\"y\":61},\"holeLoc\":{\"x\":289,\"y\":373},\"traps\":[{\"topLeft\":{\"x\":66,\"y\":294},\"bottomRight\":{\"x\":154,\"y\":460}},{\"topLeft\":{\"x\":369,\"y\":324},\"bottomRight\":{\"x\":459,\"y\":442}},{\"topLeft\":{\"x\":227,\"y\":419},\"bottomRight\":{\"x\":285,\"y\":439}}],\"waters\":[],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":113,\"y\":260},\"end\":{\"x\":433,\"y\":262}}]}');\n\nvar sandWallWater = JSON.parse('{\"par\":2,\"ballLoc\":{\"x\":448,\"y\":439},\"holeLoc\":{\"x\":326,\"y\":440},\"traps\":[{\"topLeft\":{\"x\":128,\"y\":201},\"bottomRight\":{\"x\":274,\"y\":362}}],\"waters\":[{\"topLeft\":{\"x\":358,\"y\":345},\"bottomRight\":{\"x\":407,\"y\":498}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":319,\"y\":318},\"end\":{\"x\":434,\"y\":318}}]}');\n\nvar sandWallWater2 = JSON.parse('{\"par\":3,\"ballLoc\":{\"x\":463,\"y\":476},\"holeLoc\":{\"x\":367,\"y\":474},\"traps\":[{\"topLeft\":{\"x\":256,\"y\":143},\"bottomRight\":{\"x\":494,\"y\":206}},{\"topLeft\":{\"x\":178,\"y\":256},\"bottomRight\":{\"x\":229,\"y\":338}}],\"waters\":[{\"topLeft\":{\"x\":385,\"y\":308},\"bottomRight\":{\"x\":439,\"y\":487}},{\"topLeft\":{\"x\":55,\"y\":187},\"bottomRight\":{\"x\":147,\"y\":433}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":457,\"y\":303},\"end\":{\"x\":330,\"y\":303}},{\"start\":{\"x\":57,\"y\":120},\"end\":{\"x\":423,\"y\":55}},{\"start\":{\"x\":123,\"y\":33},\"end\":{\"x\":299,\"y\":93}}]}');\nvar bornInSand = JSON.parse('{\"par\":3,\"ballLoc\":{\"x\":200,\"y\":400},\"holeLoc\":{\"x\":351,\"y\":158},\"traps\":[{\"topLeft\":{\"x\":243,\"y\":84},\"bottomRight\":{\"x\":448,\"y\":234}},{\"topLeft\":{\"x\":112,\"y\":331},\"bottomRight\":{\"x\":252,\"y\":438}}],\"waters\":[{\"topLeft\":{\"x\":280,\"y\":266},\"bottomRight\":{\"x\":305,\"y\":296}},{\"topLeft\":{\"x\":97,\"y\":63},\"bottomRight\":{\"x\":153,\"y\":133}},{\"topLeft\":{\"x\":435,\"y\":387},\"bottomRight\":{\"x\":472,\"y\":434}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":39,\"y\":223},\"end\":{\"x\":76,\"y\":154}},{\"start\":{\"x\":174,\"y\":147},\"end\":{\"x\":205,\"y\":190}},{\"start\":{\"x\":361,\"y\":360},\"end\":{\"x\":421,\"y\":388}},{\"start\":{\"x\":354,\"y\":458},\"end\":{\"x\":401,\"y\":438}}]}');\nvar hell = JSON.parse('{\"par\":5,\"ballLoc\":{\"x\":191,\"y\":475},\"holeLoc\":{\"x\":256,\"y\":477},\"traps\":[{\"topLeft\":{\"x\":7,\"y\":236},\"bottomRight\":{\"x\":214,\"y\":286}},{\"topLeft\":{\"x\":11,\"y\":101},\"bottomRight\":{\"x\":492,\"y\":110}}],\"waters\":[{\"topLeft\":{\"x\":213,\"y\":66},\"bottomRight\":{\"x\":237,\"y\":492}},{\"topLeft\":{\"x\":299,\"y\":204},\"bottomRight\":{\"x\":450,\"y\":222}},{\"topLeft\":{\"x\":235,\"y\":303},\"bottomRight\":{\"x\":308,\"y\":341}},{\"topLeft\":{\"x\":442,\"y\":291},\"bottomRight\":{\"x\":497,\"y\":346}},{\"topLeft\":{\"x\":50,\"y\":29},\"bottomRight\":{\"x\":127,\"y\":37}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":152,\"y\":259},\"end\":{\"x\":212,\"y\":261}},{\"start\":{\"x\":77,\"y\":257},\"end\":{\"x\":15,\"y\":246}}]}');\nvar dangerZone = JSON.parse('{\"par\":5,\"ballLoc\":{\"x\":200,\"y\":400},\"holeLoc\":{\"x\":46,\"y\":53},\"traps\":[{\"topLeft\":{\"x\":20,\"y\":427},\"bottomRight\":{\"x\":33,\"y\":452}},{\"topLeft\":{\"x\":303,\"y\":288},\"bottomRight\":{\"x\":326,\"y\":491}},{\"topLeft\":{\"x\":334,\"y\":228},\"bottomRight\":{\"x\":497,\"y\":238}},{\"topLeft\":{\"x\":286,\"y\":10},\"bottomRight\":{\"x\":323,\"y\":204}},{\"topLeft\":{\"x\":391,\"y\":175},\"bottomRight\":{\"x\":427,\"y\":276}}],\"waters\":[{\"topLeft\":{\"x\":6,\"y\":65},\"bottomRight\":{\"x\":33,\"y\":410}},{\"topLeft\":{\"x\":58,\"y\":71},\"bottomRight\":{\"x\":81,\"y\":406}},{\"topLeft\":{\"x\":58,\"y\":443},\"bottomRight\":{\"x\":81,\"y\":494}},{\"topLeft\":{\"x\":75,\"y\":208},\"bottomRight\":{\"x\":332,\"y\":285}},{\"topLeft\":{\"x\":62,\"y\":431},\"bottomRight\":{\"x\":80,\"y\":449}},{\"topLeft\":{\"x\":5,\"y\":386},\"bottomRight\":{\"x\":35,\"y\":497}},{\"topLeft\":{\"x\":56,\"y\":217},\"bottomRight\":{\"x\":74,\"y\":251}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":82,\"y\":291},\"end\":{\"x\":336,\"y\":289}},{\"start\":{\"x\":337,\"y\":292},\"end\":{\"x\":338,\"y\":202}},{\"start\":{\"x\":340,\"y\":206},\"end\":{\"x\":87,\"y\":204}},{\"start\":{\"x\":90,\"y\":206},\"end\":{\"x\":88,\"y\":69}},{\"start\":{\"x\":59,\"y\":70},\"end\":{\"x\":89,\"y\":69}},{\"start\":{\"x\":381,\"y\":321},\"end\":{\"x\":457,\"y\":407}},{\"start\":{\"x\":374,\"y\":152},\"end\":{\"x\":450,\"y\":60}},{\"start\":{\"x\":246,\"y\":158},\"end\":{\"x\":156,\"y\":67}},{\"start\":{\"x\":138,\"y\":51},\"end\":{\"x\":183,\"y\":10}}]}');\nvar twoSidesOfHell = JSON.parse('{\"par\":5,\"ballLoc\":{\"x\":240,\"y\":467},\"holeLoc\":{\"x\":252,\"y\":36},\"traps\":[{\"topLeft\":{\"x\":119,\"y\":372},\"bottomRight\":{\"x\":351,\"y\":488}},{\"topLeft\":{\"x\":345,\"y\":108},\"bottomRight\":{\"x\":401,\"y\":271}},{\"topLeft\":{\"x\":58,\"y\":49},\"bottomRight\":{\"x\":132,\"y\":203}},{\"topLeft\":{\"x\":203,\"y\":158},\"bottomRight\":{\"x\":292,\"y\":197}}],\"waters\":[{\"topLeft\":{\"x\":149,\"y\":404},\"bottomRight\":{\"x\":177,\"y\":438}},{\"topLeft\":{\"x\":300,\"y\":402},\"bottomRight\":{\"x\":323,\"y\":433}},{\"topLeft\":{\"x\":153,\"y\":5},\"bottomRight\":{\"x\":339,\"y\":23}},{\"topLeft\":{\"x\":7,\"y\":316},\"bottomRight\":{\"x\":91,\"y\":495}},{\"topLeft\":{\"x\":398,\"y\":329},\"bottomRight\":{\"x\":491,\"y\":494}},{\"topLeft\":{\"x\":158,\"y\":26},\"bottomRight\":{\"x\":222,\"y\":48}},{\"topLeft\":{\"x\":282,\"y\":28},\"bottomRight\":{\"x\":328,\"y\":47}}],\"walls\":[{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":500,\"y\":5}},{\"start\":{\"x\":5,\"y\":5},\"end\":{\"x\":5,\"y\":500}},{\"start\":{\"x\":495,\"y\":5},\"end\":{\"x\":495,\"y\":495}},{\"start\":{\"x\":5,\"y\":495},\"end\":{\"x\":500,\"y\":495}},{\"start\":{\"x\":183,\"y\":427},\"end\":{\"x\":295,\"y\":423}}]}');\n\nMAPS.push(empty);\nMAPS.push(justWall);\nMAPS.push(sandAndWall);\nMAPS.push(sandWallWater);\nMAPS.push(sandWallWater2);\nMAPS.push(bornInSand);\nMAPS.push(hell);\nMAPS.push(dangerZone);\nMAPS.push(twoSidesOfHell);\n\nmodule.exports = MAPS;\n\n//# sourceURL=webpack:///./lib/game_modes/maps.js?");

/***/ }),

/***/ "./lib/game_modes/score_card.js":
/*!**************************************!*\
  !*** ./lib/game_modes/score_card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreCard; });\nfunction ScoreCard($scoreEl) {\n    this.$scoreEl = $scoreEl;\n    this.$holeRow = this.$scoreEl.find('.hole-row');\n    this.$parRow = this.$scoreEl.find('.par-row');\n    this.$strokesRow = this.$scoreEl.find('.strokes-row');\n}\n\nScoreCard.prototype.addHole = function(number, par) {\n    this.$holeRow.append('<td>' + number + '</td>');\n    this.$parRow.append('<td>' + par + '</td>');\n    this.$strokesRow.append('<td></td>');\n}\nScoreCard.prototype.courseLength = function() {\n    return this.$strokesRow.children().length;\n}\nScoreCard.prototype.logStroke = function(idx) {\n    var currentStrokes = this.strokes(idx);\n    this.strokes(idx, currentStrokes + 1);\n}\nScoreCard.prototype.strokes = function(idx, val) {\n    var node = this.$strokesRow.children()[idx + 1];\n    node.innerText = val || node.innerText;\n    return parseInt(node.innerText) || 0;\n};\nScoreCard.prototype.par = function(idx, val) {\n    var node = this.$parRow.children()[idx + 1];\n    node.innerText = val || node.innerText;\n    return parseInt(node.innerText) || 0;\n};\nScoreCard.prototype.eachHole = function(callBack) {\n    var holeCount = this.courseLength();\n    for (var i = 0; i < holeCount - 1; i++) {\n        callBack(this.par(i), this.strokes(i));\n    }\n};\nScoreCard.prototype.totalScore = function() {\n    var score = 0;\n    this.eachHole(function(par, strokes) {\n        score += strokes;\n    });\n    return score;\n};\nScoreCard.prototype.totalPar = function() {\n    var totalPar = 0;\n    this.eachHole(function(par, strokes) {\n        totalPar += par;\n    });\n    return totalPar;\n};\n\n\n//# sourceURL=webpack:///./lib/game_modes/score_card.js?");

/***/ }),

/***/ "./lib/game_modes/welcome_screen.js":
/*!******************************************!*\
  !*** ./lib/game_modes/welcome_screen.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WelcomeScreen; });\n/* harmony import */ var _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_mode */ \"./lib/base_classes/game_mode.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n/* harmony import */ var _util_golf_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/golf_math */ \"./lib/util/golf_math.js\");\n\n\n\n\nfunction WelcomeScreen(canvas, $gameModeSpace, changeGameMode) {\n    _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, canvas, $gameModeSpace, changeGameMode);\n\n    this.playButtonAttrs = {\n      radius: 150, \n      centerX: 250,\n      centerY: 250,\n      color: 'green'\n    };\n};\n\nWelcomeScreen.prototype = Object.create(_base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nWelcomeScreen.prototype.registerEvents = function() {\n  this.addEvent(this.canvas, 'mousedown', this.handleClick);\n}\n\nWelcomeScreen.prototype.handleClick = function(event){\n  event.preventDefault();\n  //figure out which thing was clicked on, trigger appropriately\n  var clickLoc = {x: event.offsetX, y: event.offsetY};\n  if(this.insideButton(clickLoc, this.playButtonAttrs)){\n    this.changeGameMode();\n  }\n}\n\nWelcomeScreen.prototype.insideButton = function(coords, buttonAttrs){\n  var center = {x: buttonAttrs.centerX, y: buttonAttrs.centerY};\n  var dist = _util_golf_math__WEBPACK_IMPORTED_MODULE_2__[\"default\"].distBtwPoints(coords, center);\n  return dist <= buttonAttrs.radius;\n}\n\n\nWelcomeScreen.prototype.startAction = function() {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawBackground(this.ctx, {width: this.width, height: this.height, color: 'white'});\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawText(this.ctx, \"CLICK GREEN THING\");\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawCircle(this.ctx, this.playButtonAttrs);\n}\n\n\n\n//# sourceURL=webpack:///./lib/game_modes/welcome_screen.js?");

/***/ }),

/***/ "./lib/items/ball.js":
/*!***************************!*\
  !*** ./lib/items/ball.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _util_vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/vector */ \"./lib/util/vector.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n\n\n\nfunction Ball(loc, level) {\n    this.startLoc = {\n        x: loc.x,\n        y: loc.y\n    };\n    this.loc = {\n        x: loc.x,\n        y: loc.y\n    };\n    this.level = level;\n    this.velocity = new _util_vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\n}\n\nBall.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\nBall.prototype.moving = function(){\n  return this.velocity.magnitude > 0;\n}\nBall.prototype.reset = function() {\n    this.loc.x = this.startLoc.x;\n    this.loc.y = this.startLoc.y;\n    this.velocity.magnitude = 0;\n}\n\nBall.prototype.render = function(context) {\n    this.renderBall(context);\n    //this.renderMovementVector(context);\n    //useful for debugging bounces, can see direction of travel\n}\n\nBall.prototype.renderBall = function(context) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawCircle(context, {\n        color: 'white',\n        radius: 5,\n        centerX: this.loc.x,\n        centerY: this.loc.y\n    });\n}\n\nBall.prototype.renderMovementVector = function(context) {\n    var offsets = this.velocity.toOffsets();\n    var vEnd = {\n        x: this.loc.x + offsets.x * 50,\n        y: this.loc.y + offsets.y * 50\n    };\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawLine(context, {\n        color: 'white',\n        width: 2,\n        start: this.loc,\n        end: vEnd\n    })\n}\n\nBall.prototype.hit = function(force, direction) {\n    //to prevent repeated ball wall bounce weirdness\n    //dissallow bouncing off the same wall consecutively \n    delete this.lastBouncedWall;\n    var magnitude = force / 20;\n    this.velocity = new _util_vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](magnitude, direction);\n}\nBall.prototype.move = function() {\n    var offsets = this.velocity.toOffsets();\n    this.loc.x += offsets.x;\n    this.loc.y += offsets.y;\n    this.applyFriction();\n    this.processCollisions();\n}\n\nBall.prototype.processCollisions = function() {\n    var ball = this;\n    this.level.walls.forEach(function(wall) {\n        if (wall.nearWall(ball.loc) && ball.lastBouncedWall != wall) {\n            ball.lastBouncedWall = wall;\n            var wallAngle = _util_vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fromCoords(wall.start, wall.end).direction;\n            var ballAngle = ball.velocity.direction;\n            var newAngle = 2 * wallAngle - ballAngle;\n            ball.velocity = new _util_vector__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n                ball.velocity.magnitude,\n                newAngle\n            );\n        }\n    });\n}\n\nBall.prototype.applyFriction = function(vel) {\n    var friction = this.level.frictionAtLoc(this.loc);\n    if (this.velocity.magnitude > friction) {\n        this.velocity.magnitude -= friction;\n    } else {\n        this.velocity.magnitude = 0;\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/items/ball.js?");

/***/ }),

/***/ "./lib/items/hole.js":
/*!***************************!*\
  !*** ./lib/items/hole.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hole; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n/* harmony import */ var _util_golf_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/golf_math */ \"./lib/util/golf_math.js\");\n\n\n\nfunction Hole(loc) {\n    this.loc = loc\n}\nHole.RADIUS = 10;\nHole.MAX_BALL_SPEED = 2.5;\n\n\nHole.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nHole.prototype.render = function(context) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawCircle(context, {\n        color: 'black',\n        radius: Hole.RADIUS,\n        centerX: this.loc.x,\n        centerY: this.loc.y\n    });\n}\n\nHole.prototype.ballInHole = function(ball) {\n  var ballDistance = _util_golf_math__WEBPACK_IMPORTED_MODULE_2__[\"default\"].distBtwPoints(this.loc, ball.loc);\n  var ballSpeed = ball.velocity.magnitude;\n  var inHole = false;\n  if(ballDistance < Hole.RADIUS){\n    if(ballSpeed <= Hole.MAX_BALL_SPEED){\n      inHole = true;\n      //if ball is traveling too rapidly, it takes a wicked hop :(\n    } else {\n      inHole = false;\n      var offset = (Math.random() * 0.5 * Math.PI) - (0.25 * Math.PI);\n      ball.velocity.direction += offset;\n    }\n  }\n  return inHole;\n}\n\n\n//# sourceURL=webpack:///./lib/items/hole.js?");

/***/ }),

/***/ "./lib/items/sand.js":
/*!***************************!*\
  !*** ./lib/items/sand.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sand; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n\n\nSand.DEFAULT_SAND_FRICTION = 0.3;\nfunction Sand(topLeft, bottomRight) {\n    this.topLeft = topLeft;\n    this.bottomRight = bottomRight;\n    this.friction = Sand.DEFAULT_SAND_FRICTION;\n}\n\nSand.initArray = function(sandData) {\n    var traps = [];\n    if (sandData) {\n        sandData.forEach(function(data) {\n            traps.push(new Sand(data.topLeft, data.bottomRight));\n        });\n    }\n    return traps;\n}\n\nSand.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nSand.prototype.render = function(context) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawRoundRect(context, {\n        color: 'khaki',\n        radius: 10,\n        topLeft: this.topLeft,\n        bottomRight: this.bottomRight\n    });\n}\n\nSand.prototype.contains = function(ball){\n  return (ball.loc.x <= this.bottomRight.x) &&\n         (ball.loc.x >= this.topLeft.x) &&\n         (ball.loc.y >= this.topLeft.y) &&\n         (ball.loc.y <= this.bottomRight.y);\n}\n\n\n\n//# sourceURL=webpack:///./lib/items/sand.js?");

/***/ }),

/***/ "./lib/items/wall.js":
/*!***************************!*\
  !*** ./lib/items/wall.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Wall; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n/* harmony import */ var _util_golf_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/golf_math */ \"./lib/util/golf_math.js\");\n\n\n\nfunction Wall(start, end) {\n    this.start = start;\n    this.end = end;\n}\n\nWall.initArray = function(wallData) {\n    var walls = [];\n    if (wallData) {\n        wallData.forEach(function(data) {\n            walls.push(new Wall(data.start, data.end));\n        });\n    }\n    return walls;\n}\n\nWall.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nWall.prototype.wallAngle = function(){\n  return new Vector(this.start, this.end).direction;\n}\n\nWall.NEARNESS_THRESHOLD = 1;\n\nWall.prototype.nearWall = function(point){\n  var wallLength = _util_golf_math__WEBPACK_IMPORTED_MODULE_2__[\"default\"].distBtwPoints(this.start, this.end);\n  var distToStart = _util_golf_math__WEBPACK_IMPORTED_MODULE_2__[\"default\"].distBtwPoints(this.start, point);\n  var distToEnd = _util_golf_math__WEBPACK_IMPORTED_MODULE_2__[\"default\"].distBtwPoints(this.end, point);\n  var nearNess = Math.abs(distToStart + distToEnd - wallLength);\n  //the lower the nearNess, the closer to the wall the point is\n  return nearNess < Wall.NEARNESS_THRESHOLD;\n}\n\nWall.prototype.render = function(context) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawLine(context, {\n        color: 'brown',\n        width: 5,\n        start: this.start,\n        end: this.end\n    });\n}\n\n\n//# sourceURL=webpack:///./lib/items/wall.js?");

/***/ }),

/***/ "./lib/items/water.js":
/*!****************************!*\
  !*** ./lib/items/water.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Water; });\n/* harmony import */ var _base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_item */ \"./lib/base_classes/game_item.js\");\n/* harmony import */ var _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/golf_draw */ \"./lib/util/golf_draw.js\");\n\n\n\nfunction Water(topLeft, bottomRight) {\n    this.topLeft = topLeft;\n    this.bottomRight = bottomRight;\n}\n\nWater.initArray = function(waterData) {\n    var waters = [];\n    if (waterData) {\n        waterData.forEach(function(data) {\n            waters.push(new Water(data.topLeft, data.bottomRight));\n        });\n    }\n    return waters;\n}\n\nWater.prototype = Object.create(_base_classes_game_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\nWater.prototype.render = function(context) {\n    _util_golf_draw__WEBPACK_IMPORTED_MODULE_1__[\"default\"].drawRoundRect(context, {\n        color: 'blue',\n        radius: 10,\n        topLeft: this.topLeft,\n        bottomRight: this.bottomRight\n    });\n}\n\nWater.prototype.contains = function(ball){\n  return (ball.loc.x <= this.bottomRight.x) &&\n         (ball.loc.x >= this.topLeft.x) &&\n         (ball.loc.y >= this.topLeft.y) &&\n         (ball.loc.y <= this.bottomRight.y);\n}\n\n\n//# sourceURL=webpack:///./lib/items/water.js?");

/***/ }),

/***/ "./lib/util/golf_draw.js":
/*!*******************************!*\
  !*** ./lib/util/golf_draw.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    drawLine: function(context, options) {\n        context.beginPath();\n        context.moveTo(options.start.x, options.start.y);\n        context.lineTo(options.end.x, options.end.y);\n        context.lineWidth = options.width;\n        context.strokeStyle = options.color;\n        context.stroke();\n    },\n\n    drawCircle: function(context, options) {\n        context.beginPath();\n        context.arc(\n            options.centerX,\n            options.centerY,\n            options.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n        context.fillStyle = options.color;\n        context.fill();\n    },\n    drawText: function(context, message, options) {\n        var options = options || {};\n        var color = options.color || 'black';\n        var size = options.size || 20;\n        var weight = options.weight || 'bold';\n        var x = options.x || 65;\n        var y = options.y || 50;\n        context.beginPath();\n        context.fillStyle = color;\n        context.font = weight + \" \" + size + \"pt \" + \"Arial\";\n        context.fillText(message, x, y);\n        context.fill();\n    },\n    drawBackground: function(context, options) {\n        context.beginPath();\n        context.fillStyle = options.color;\n        context.fillRect(0, 0, options.width, options.height);\n    },\n    drawRoundRect: function(context, options) {\n        var radius = options.radius || 1;\n        var x = options.topLeft.x;\n        var y = options.topLeft.y;\n        var width = options.bottomRight.x - x;\n        var height = options.bottomRight.y - y;\n        context.fillStyle = options.color;\n        context.beginPath();\n        context.moveTo(x + radius, y);\n        context.lineTo(x + width - radius, y);\n        context.quadraticCurveTo(x + width, y, x + width, y + radius);\n        context.lineTo(x + width, y + height - radius);\n        context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);\n        context.lineTo(x + radius, y + height);\n        context.quadraticCurveTo(x, y + height, x, y + height - radius);\n        context.lineTo(x, y + radius);\n        context.quadraticCurveTo(x, y, x + radius, y);\n        context.closePath();\n        context.fill();\n    },\n    drawRect: function(context, options) {\n        var x = options.topLeft.x;\n        var y = options.topLeft.y;\n        var width = options.bottomRight.x - x;\n        var height = options.bottomRight.y - y;\n        context.fillStyle = options.color;\n        context.beginPath();\n        context.rect(x, y, width, height);\n        context.fill();\n    }\n});\n\n\n//# sourceURL=webpack:///./lib/util/golf_draw.js?");

/***/ }),

/***/ "./lib/util/golf_math.js":
/*!*******************************!*\
  !*** ./lib/util/golf_math.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    distBtwPoints: function(start, end) {\n        var dy = end.y - start.y;\n        var dx = end.x - start.x;\n        return Math.sqrt(dy * dy + dx * dx);\n    }\n});\n\n\n//# sourceURL=webpack:///./lib/util/golf_math.js?");

/***/ }),

/***/ "./lib/util/vector.js":
/*!****************************!*\
  !*** ./lib/util/vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\n/* harmony import */ var _util_golf_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/golf_math */ \"./lib/util/golf_math.js\");\n\nfunction Vector(magnitude, direction) {\n    this.magnitude = magnitude;\n    //make sure it is within 2pi\n    this.direction = (direction + 2 * Math.PI) % (2 * Math.PI);\n}\n\nVector.fromCoords = function(start, end) {\n    var dy = end.y - start.y;\n    var dx = end.x - start.x;\n    var direction = Math.atan2(dy, dx);\n    var magnitude = _util_golf_math__WEBPACK_IMPORTED_MODULE_0__[\"default\"].distBtwPoints(start, end);\n    return new Vector(magnitude, direction);\n}\n\nVector.fromOffsets = function(dx, dy) {\n    var direction = Math.atan2(dy, dx);\n    var magnitude = Math.sqrt(dx * dx + dy * dy);\n    return new Vector(magnitude, direction);\n}\n\nVector.prototype.dotProduct = function(other) {\n    var v1 = this.toOffsets();\n    var v2 = other.toOffsets();\n    return v1.x * v2.x + v1.y * v2.y;\n}\n\nVector.prototype.crossProduct = function(other) { \n}\n\nVector.prototype.toOffsets = function() {\n    var dx = Math.cos(this.direction) * this.magnitude;\n    var dy = Math.sin(this.direction) * this.magnitude;\n    return {\n        x: dx,\n        y: dy\n    };\n}\nVector.prototype.normal = function() {\n    var v = this.toOffsets();\n    var hyp = Math.sqrt(v.x * v.x + v.y * v.y);\n    return {\n        x: v.y / hyp,\n        y: (-1 * v.x) / hyp\n    }\n}\n\n\n//# sourceURL=webpack:///./lib/util/vector.js?");

/***/ })

/******/ });