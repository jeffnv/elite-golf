import GameItem from "../base_classes/game_item";
import GolfDraw from "../util/golf_draw";
import GolfMath from "../util/golf_math";

const CONSTANTS = {
  RADIUS: 10,
  MAX_BALL_SPEED: 2.5
};

export default class Hole extends GameItem {
  constructor(loc) {
    super();
    this.loc = loc

  }
  render(context) {
    GolfDraw.drawCircle(context, {
      color: 'black',
      radius: CONSTANTS.RADIUS,
      centerX: this.loc.x,
      centerY: this.loc.y
    });
  }

  ballInHole(ball) {
    const ballDistance = GolfMath.distBtwPoints(this.loc, ball.loc);
    const ballSpeed = ball.velocity.magnitude;
    let inHole = false;
    if (ballDistance < CONSTANTS.RADIUS) {
      if (ballSpeed <= CONSTANTS.MAX_BALL_SPEED) {
        inHole = true;
        //if ball is traveling too rapidly, it takes a wicked hop :(
      } else {
        inHole = false;
        const offset = (Math.random() * 0.5 * Math.PI) - (0.25 * Math.PI);
        ball.velocity.direction += offset;
      }
    }
    return inHole;
  }
};



