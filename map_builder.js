MapBuilder = {
    buildMap: function(options) {
        var map = MapBuilder.emptyMap();
        //merge options
        MapBuilder._mergeMapOptions(map, options);
        return map;
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
