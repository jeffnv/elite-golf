MAPS = []

//start with par 1 empty map
var map;

map = MapBuilder.buildMap({
    par: 3,
    ballLoc: {x: 30, y: 30},
    holeLoc: {x: 450, y: 450},
    traps: [
      { 
        topLeft: { x: 100, y: 30 }, 
        bottomRight: { x: 300, y: 400 } 
      },
    ],
});

MAPS.push(map);
MAPS.push(MapBuilder.emptyMap());

//big vertical wall
map = MapBuilder.buildMap({
    par: 2,
    ballLoc: {x: 30, y: 30},
    holeLoc: {x: 450, y: 450},
    traps: [
      { 
        topLeft: { x: 100, y: 30 }, 
        bottomRight: { x: 300, y: 400 } 
      },
    ],
    walls: [
        { start: { x: 50, y: 5 }, end: { x: 50, y: 400 }, }
    ]
})
MAPS.push(map);


//just a diagonal wall
map = MapBuilder.buildMap({
    par: 3,
    walls: [
        { start: { x: 50, y: 50 }, end: { x: 450, y: 450 }, }
    ]
})
MAPS.push(map);

