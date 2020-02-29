import GameMode from "../base_classes/game_mode";
import ScoreCard from "../game_modes/score_card";
import MAPS from "../game_modes/maps";
import GolfMap from "../game_modes/golf_map";
import Vector from "../util/vector";

export default class Level extends GameMode {
    constructor(canvas, $gameModeSpace, changeGameMode) {
        super(canvas, $gameModeSpace, changeGameMode);
        this.scoreCard = new ScoreCard(this.$gameModeSpace.find('table'));
        this.mapIndex = 0;
        this.running = false;
        this.loadPar();
        this.loadMap();
    }
    buildHTMLElements() {
        const $scoreCard = $('<table class="table table-condensed table-bordered" id="score"></table>');
        $scoreCard.append('<tr class="hole-row"><th></th></tr>');
        $scoreCard.append('<tr class="par-row"><th>Par</th></tr>');
        $scoreCard.append('<tr class="strokes-row"><th>Strokes</th></tr>');
        this.$gameModeSpace.append($scoreCard);
    }

    loadPar() {
        const that = this;
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
            const score = this.scoreCard.totalScore();
            const par = this.scoreCard.totalPar();

            this.changeGameMode({
                score: score,
                par: par
            });
        }
    }

    dispose() {
        this.running = false
        // clearInterval(this.intervalID);
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
        this.running = true;
        this.tick();
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
        const clickStart = {
            x: event.x,
            y: event.y
        };
        const that = this;

        function dragHandler(event) {
            const currentPos = {
                x: event.x,
                y: event.y
            };
            that.drawVector(clickStart, currentPos);
        }

        function releaseHandler(event) {
            const clickEnd = {
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
        const vector = Vector.fromCoords(start, end);
        this.map && this.map.drawVector(vector);
    }
    handleRelease(clickStart, clickEnd) {
        const vector = Vector.fromCoords(clickStart, clickEnd);
        //want to hit ball in opposite direction from the drag
        //angry birds style
        vector.direction = (vector.direction + Math.PI) % (2 * Math.PI);
        this.map && this.map.hitBall(vector);
    }

    tick() {
        if (this.running) {
            requestAnimationFrame((params) => {
                if (this.map) this.map.tick(this.ctx);
                this.tick();
            })
        }
    }
};

