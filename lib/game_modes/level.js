function Level(canvas, $gameModeSpace, changeGameMode) {
    GameMode.call(this, canvas, $gameModeSpace, changeGameMode);
    this.scoreCard = new ScoreCard(this.$gameModeSpace.find('table'));
    this.mapIndex = 0;
    this.loadPar();
    this.loadMap();
}


Level.FPS = 60;

Level.prototype = Object.create(GameMode.prototype);

Level.prototype.buildHTMLElements = function() {
    var $scoreCard = $('<table id="score"></table>');
    $scoreCard.append('<tr class="hole-row"><th></th></tr>');
    $scoreCard.append('<tr class="par-row"><th>Par</th></tr>');
    $scoreCard.append('<tr class="strokes-row"><th>Strokes</th></tr>');
    this.$gameModeSpace.append($scoreCard);
}

Level.prototype.loadPar = function() {
    var that = this;
    MAPS.forEach(function(map, i) {
        that.scoreCard.addHole(i + 1, map.par);
    });
}

Level.prototype.playNextMap = function() {
    this.mapIndex++;
    //should check to see if we are out of maps
    if (this.mapIndex < MAPS.length) {
        this.loadMap();
    } else {
        var score = this.scoreCard.totalScore();
        var par = this.scoreCard.totalPar();

        this.changeGameMode({
            score: score,
            par: par
        });
    }
}

Level.prototype.dispose = function() {
    clearInterval(this.intervalID);
    this.removeEvents();
}

Level.prototype.loadMap = function() {
    this.map = new GolfMap(
        MAPS[this.mapIndex],
        this.width,
        this.height,
        this.logStroke.bind(this),
        this.playNextMap.bind(this)
    );
}

Level.prototype.logStroke = function() {
    this.scoreCard.logStroke(this.mapIndex);
}

Level.prototype.startAction = function() {
    this.intervalID = setInterval(
        this.tick.bind(this),
        1000 / Level.FPS
    );
}

Level.prototype.registerEvents = function() {
    this.boundMouseHandler = this.handleMouseDown.bind(this);
    this.canvas.addEventListener(
        'mousedown',
        this.boundMouseHandler,
        false
    );
}

Level.prototype.handleMouseDown = function(event) {
    //no hitting moving balls
    if (this.map.ballMoving()) {
        return;
    }
    var clickStart = {
        x: event.x,
        y: event.y
    };
    var that = this;

    function dragHandler(event) {
        var currentPos = {
            x: event.x,
            y: event.y
        };
        that.drawVector(clickStart, currentPos);
    }

    function releaseHandler(event) {
        var clickEnd = {
            x: event.x,
            y: event.y
        };
        that.canvas.removeEventListener('mouseup', releaseHandler);
        that.canvas.removeEventListener('mousemove', dragHandler);
        that.handleRelease(clickStart, clickEnd);
    };
    this.canvas.addEventListener(
        'mouseup',
        releaseHandler,
        false
    );
    this.canvas.addEventListener(
        'mousemove',
        dragHandler,
        false
    );
}

Level.prototype.drawVector = function(start, end) {
    var vector = Vector.fromCoords(start, end);
    this.map && this.map.drawVector(vector);
}
Level.prototype.handleRelease = function(clickStart, clickEnd) {
    var vector = Vector.fromCoords(clickStart, clickEnd);
    //want to hit ball in opposite direction from the drag
    //angry birds style
    vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);
    this.map && this.map.hitBall(vector);
}

Level.prototype.tick = function() {
    this.map && this.map.tick(this.ctx);
}
