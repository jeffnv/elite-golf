import GameMode from "../base_classes/game_mode";
import ScoreCard from "../game_modes/score_card";
import MAPS from "../game_modes/maps";
import GolfMap from "../game_modes/golf_map";
import Vector from "../util/vector";

const CONSTANTS = {
    FPS: 60
};
export default class Level extends GameMode {
    constructor(canvas, $gameModeSpace, changeGameMode) {
        super(canvas, $gameModeSpace, changeGameMode);
        this.scoreCard = new ScoreCard(this.$gameModeSpace.find('table'));
        this.mapIndex = 0;
        this.loadPar();
        this.loadMap();
    }
    buildHTMLElements() {
        var $scoreCard = $('<table class="table table-condensed table-bordered" id="score"></table>');
        $scoreCard.append('<tr class="hole-row"><th></th></tr>');
        $scoreCard.append('<tr class="par-row"><th>Par</th></tr>');
        $scoreCard.append('<tr class="strokes-row"><th>Strokes</th></tr>');
        this.$gameModeSpace.append($scoreCard);
    }

    loadPar() {
        var that = this;
        MAPS.forEach(function (map, i) {
            that.scoreCard.addHole(i + 1, map.par);
        });
    }

    playNextMap() {
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

    dispose() {
        clearInterval(this.intervalID);
        this.removeEvents();
    }

    loadMap() {
        this.map = new GolfMap(
            MAPS[this.mapIndex],
            this.width,
            this.height,
            this.logStroke.bind(this),
            this.playNextMap.bind(this)
        );
    }

    logStroke() {
        this.scoreCard.logStroke(this.mapIndex);
    }

    startAction() {
        this.intervalID = setInterval(
            this.tick.bind(this),
            1000 / Level.FPS
        );
    }

    registerEvents() {
        this.boundMouseHandler = this.handleMouseDown.bind(this);
        this.canvas.addEventListener(
            'mousedown',
            this.boundMouseHandler,
            false
        );
    }

    handleMouseDown(event) {
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

    drawVector(start, end) {
        var vector = Vector.fromCoords(start, end);
        this.map && this.map.drawVector(vector);
    }
    handleRelease(clickStart, clickEnd) {
        var vector = Vector.fromCoords(clickStart, clickEnd);
        //want to hit ball in opposite direction from the drag
        //angry birds style
        vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);
        this.map && this.map.hitBall(vector);
    }

    tick() {
        this.map && this.map.tick(this.ctx);
    }
};

