MapBuilder = {
    randomMap: function() {
        var ballLoc = this._randomCoords();
        var holeLoc = this._randomCoords();
        var wallCount = Math.random() * 5;
        var trapCount = Math.random() * 5;
        var waterCount = Math.random() * 5;
        var walls = this._randomWalls(wallCount);
        var traps = this._randomRects(trapCount);
        var waters = this._randomRects(waterCount);
        var par = this._rand(1, 4);
        return this.buildMap({
          par: par,
          ballLoc: ballLoc,
          holeLoc: holeLoc,
          walls: walls,
          waters: waters,
          traps: traps
        });
    },
    buildMap: function(options) {
        var map = MapBuilder.emptyMap();
        MapBuilder._mergeMapOptions(map, options);
        return map;
    },
    _rand: function(min, max) {
        var max = max || 500;
        var min = min || 0;
        var range = max - min;
        return Math.floor(Math.random() * range + min);
    },
    _randomCoords: function() {
        var rX = this._rand();
        var rY = this._rand();
        return {
            x: rX,
            y: rY
        };
    },
    _randomCoordSet: function() {
        var x1 = this._rand(20, 400);
        var y1 = this._rand(20, 400);
        var x2 = this._rand(x1, 480);
        var y2 = this._rand(y1, 480);
        return [
            [x1, y1],
            [x2, y2]
        ];
    },
    _randomWall: function() {
        var coordSet = this._randomCoordSet();
        return {
            start: { x: coordSet[0][0], y: coordSet[0][1] },
            end: { x: coordSet[1][0], y: coordSet[1][1] }
        };
    },
    _randomWalls: function(count) {
        var walls = [];
        for (var i = 0; i < count; i++) {
            walls.push(this._randomWall());
        }
        return walls;
    },
    _randomRect: function() {
        var coordSet = this._randomCoordSet();
        return {
            topLeft: { x: coordSet[0][0], y: coordSet[0][1] },
            bottomRight: { x: coordSet[1][0], y: coordSet[1][1] }
        };
    },
    _randomRects: function(count) {
        var traps = [];
        for (var i = 0; i < count; i++) {
            traps.push(this._randomRect());
        }
        return traps;
    },
    _mergeMapOptions: function(defaults, options) {
        for (prop in options) {
            if (prop == "walls") {
                options['walls'].forEach(function(wall) {
                    //push additional walls into array
                    defaults['walls'].push(wall);
                });
            } else {
                defaults[prop] = options[prop];
            }
        }
    },
    emptyMap: function() {
        emptyMap = {
            par: 1,
            ballLoc: {
                x: 200,
                y: 400
            },
            holeLoc: {
                x: 400,
                y: 200
            },
            traps: [],
            waters: [],
            walls: [{
                start: {
                    x: 5,
                    y: 5
                },
                end: {
                    x: 500,
                    y: 5
                }
            }, {
                start: {
                    x: 5,
                    y: 5
                },
                end: {
                    x: 5,
                    y: 500
                }
            }, {
                start: {
                    x: 495,
                    y: 5
                },
                end: {
                    x: 495,
                    y: 495
                }
            }, {
                start: {
                    x: 5,
                    y: 495
                },
                end: {
                    x: 500,
                    y: 495
                }
            }]
        }
        return emptyMap;
    }
}
