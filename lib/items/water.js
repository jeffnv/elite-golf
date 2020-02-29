
import GameItem from "../base_classes/game_item";
import GolfDraw from "../util/golf_draw";
export default class Water extends GameItem {
    constructor(topLeft, bottomRight) {
        super();
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
    }
    render(context) {
        GolfDraw.drawRoundRect(context, {
            color: 'blue',
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


Water.initArray = function (waterData) {
    const waters = [];
    if (waterData) {
        waterData.forEach(function (data) {
            waters.push(new Water(data.topLeft, data.bottomRight));
        });
    }
    return waters;
}
