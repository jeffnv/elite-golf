import GameItem from "../base_classes/game_item";
import GolfDraw from "../util/golf_draw";
import GolfMath from "../util/golf_math";

const CONSTANTS = {
    NEARNESS_THRESHOLD: 1
};

export default class Wall extends GameItem {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
    }

    wallAngle() {
        return new Vector(this.start, this.end).direction;
    }


    nearWall(point) {
        const wallLength = GolfMath.distBtwPoints(this.start, this.end);
        const distToStart = GolfMath.distBtwPoints(this.start, point);
        const distToEnd = GolfMath.distBtwPoints(this.end, point);
        const nearNess = Math.abs(distToStart + distToEnd - wallLength);
        //the lower the nearNess, the closer to the wall the point is
        return nearNess < CONSTANTS.NEARNESS_THRESHOLD;
    }

    render(context) {
        GolfDraw.drawLine(context, {
            color: 'brown',
            width: 5,
            start: this.start,
            end: this.end
        });
    }
};


Wall.initArray = function (wallData) {
    const walls = [];
    if (wallData) {
        wallData.forEach(function (data) {
            walls.push(new Wall(data.start, data.end));
        });
    }
    return walls;
};