MAPS = []

//start with par 1 empty map

var map = MapBuilder.buildMap({
    par: 3,
    walls: [
        { start: { x: 50, y: 50 }, end: { x: 450, y: 450 }, }
    ]
})
MAPS.push(map);
MAPS.push(MapBuilder.emptyMap());
