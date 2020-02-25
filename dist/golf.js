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

/***/ "./lib/game_modes/level.js":
/*!*********************************!*\
  !*** ./lib/game_modes/level.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Level; });\n/* harmony import */ var _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base_classes/game_mode */ \"./lib/base_classes/game_mode.js\");\n/* harmony import */ var _game_modes_score_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game_modes/score_card */ \"./lib/game_modes/score_card.js\");\n\n\n\nfunction Level(canvas, $gameModeSpace, changeGameMode) {\n    _base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, canvas, $gameModeSpace, changeGameMode);\n    this.scoreCard = new _game_modes_score_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$gameModeSpace.find('table'));\n    this.mapIndex = 0;\n    this.loadPar();\n    this.loadMap();\n}\n\n\nLevel.FPS = 60;\n\nLevel.prototype = Object.create(_base_classes_game_mode__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\n\nLevel.prototype.buildHTMLElements = function() {\n    var $scoreCard = $('<table class=\"table table-condensed table-bordered\" id=\"score\"></table>');\n    $scoreCard.append('<tr class=\"hole-row\"><th></th></tr>');\n    $scoreCard.append('<tr class=\"par-row\"><th>Par</th></tr>');\n    $scoreCard.append('<tr class=\"strokes-row\"><th>Strokes</th></tr>');\n    this.$gameModeSpace.append($scoreCard);\n}\n\nLevel.prototype.loadPar = function() {\n    var that = this;\n    MAPS.forEach(function(map, i) {\n        that.scoreCard.addHole(i + 1, map.par);\n    });\n}\n\nLevel.prototype.playNextMap = function() {\n    this.mapIndex++;\n    //should check to see if we are out of maps\n    if (this.mapIndex < MAPS.length) {\n        this.loadMap();\n    } else {\n        var score = this.scoreCard.totalScore();\n        var par = this.scoreCard.totalPar();\n\n        this.changeGameMode({\n            score: score,\n            par: par\n        });\n    }\n}\n\nLevel.prototype.dispose = function() {\n    clearInterval(this.intervalID);\n    this.removeEvents();\n}\n\nLevel.prototype.loadMap = function() {\n    this.map = new GolfMap(\n        MAPS[this.mapIndex],\n        this.width,\n        this.height,\n        this.logStroke.bind(this),\n        this.playNextMap.bind(this)\n    );\n}\n\nLevel.prototype.logStroke = function() {\n    this.scoreCard.logStroke(this.mapIndex);\n}\n\nLevel.prototype.startAction = function() {\n    this.intervalID = setInterval(\n        this.tick.bind(this),\n        1000 / Level.FPS\n    );\n}\n\nLevel.prototype.registerEvents = function() {\n    this.boundMouseHandler = this.handleMouseDown.bind(this);\n    this.canvas.addEventListener(\n        'mousedown',\n        this.boundMouseHandler,\n        false\n    );\n}\n\nLevel.prototype.handleMouseDown = function(event) {\n    //no hitting moving balls\n    if (this.map.ballMoving()) {\n        return;\n    }\n    var clickStart = {\n        x: event.x,\n        y: event.y\n    };\n    var that = this;\n\n    function dragHandler(event) {\n        var currentPos = {\n            x: event.x,\n            y: event.y\n        };\n        that.drawVector(clickStart, currentPos);\n    }\n\n    function releaseHandler(event) {\n        var clickEnd = {\n            x: event.x,\n            y: event.y\n        };\n        that.canvas.removeEventListener('mouseup', releaseHandler);\n        that.canvas.removeEventListener('mousemove', dragHandler);\n        that.handleRelease(clickStart, clickEnd);\n    };\n    this.canvas.addEventListener(\n        'mouseup',\n        releaseHandler,\n        false\n    );\n    this.canvas.addEventListener(\n        'mousemove',\n        dragHandler,\n        false\n    );\n}\n\nLevel.prototype.drawVector = function(start, end) {\n    var vector = Vector.fromCoords(start, end);\n    this.map && this.map.drawVector(vector);\n}\nLevel.prototype.handleRelease = function(clickStart, clickEnd) {\n    var vector = Vector.fromCoords(clickStart, clickEnd);\n    //want to hit ball in opposite direction from the drag\n    //angry birds style\n    vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);\n    this.map && this.map.hitBall(vector);\n}\n\nLevel.prototype.tick = function() {\n    this.map && this.map.tick(this.ctx);\n}\n\n\n//# sourceURL=webpack:///./lib/game_modes/level.js?");

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

/***/ })

/******/ });