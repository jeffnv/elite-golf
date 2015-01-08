function Level(canvas, changeGameMode) {
    GameMode.call(this, canvas, changeGameMode);
    this.loadPar();
    this.mapIndex = 0;
    this.loadMap();
}
Level.FPS = 60;

Level.prototype = Object.create(GameMode.prototype);

Level.prototype.loadPar = function(){
  MAPS.forEach(function(map, i){
    ScoreCard.par(i, map.par);
  });
}

Level.prototype.playNextMap = function() {
    this.mapIndex++;
    //should check to see if we are out of maps
    if (this.mapIndex < MAPS.length) {
        this.loadMap();
    } else {
        var score = ScoreCard.totalScore();
        var par = ScoreCard.totalPar();
        var diff = Math.abs(score - par);
        var message = "Game Over! Your score: " + score + ". ";
        if(score > par){
          message += "That's " + diff + " over par. Keep practicing.";
        } else if (score < par){
          message += "That's " + diff + " UNDER par. MY GOD YOU ARE GOOD.";
        } else {
          message += "That's par! Good job there, bud!"
        }
        alert(message);

        this.changeGameMode();
    }
}

Level.prototype.dispose = function() {
    clearInterval(this.intervalID);
    this.removeEvents();
}

Level.prototype.loadMap = function() {
    var strokeNodes = document.getElementById('strokes').children;
    this.map = new GolfMap(
        MAPS[this.mapIndex],
        this.width,
        this.height,
        this.logStroke.bind(this),
        this.playNextMap.bind(this)
    );
}

Level.prototype.logStroke = function(){
  var currentStrokes = ScoreCard.strokes(this.mapIndex);
  ScoreCard.strokes(this.mapIndex, currentStrokes + 1);
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
    if(this.map.ballMoving()){
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
