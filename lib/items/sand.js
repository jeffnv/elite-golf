import GameItem from "../base_classes/game_item";
import GolfDraw from "../util/golf_draw";

const CONSTANTS = {
    DEFAULT_SAND_FRICTION: 0.3
};

export default class Sand extends GameItem {
    constructor(topLeft, bottomRight) {
        super();
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.friction = CONSTANTS.DEFAULT_SAND_FRICTION;
    }

    render(context) {
        GolfDraw.drawRoundRect(context, {
            color: 'khaki',
            radius: 10,
            topLeft: this.topLeft,
            bottomRight: this.bottomRight
        });
    }

    contains(ball) {
        return (ball.loc.x <= this.bottomRight.x) &&
            (ball.loc.x >= this.topLeft.x) &&
            (ball.loc.y >= this.topLeft.y) &&
            (ball.loc.y <= this.bottomRight.y);
    }
};

Sand.initArray = function (sandData) {
    const traps = [];
    if (sandData) {
        sandData.forEach(function (data) {
            traps.push(new Sand(data.topLeft, data.bottomRight));
        });
    }
    return traps;
};