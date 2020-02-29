import GameItem from "../base_classes/game_item";
import Ball from "../items/ball";
import Wall from "../items/wall";
import Hole from "../items/hole";
import Sand from "../items/sand";
import Water from "../items/water";
import GolfDraw from "../util/golf_draw";

const CONSTANTS = {
  MINIMUM_SWING_STRENGTH: 8,
  GRASS_FRICTION: 0.04
};
export default class GolfMap extends GameItem {
  constructor(data, dimX, dimY, strokeCallback, mapOverCallback) {
    super({});
    this.mapData = data;
    this.ball = new Ball(data.ballLoc, this);
    this.hole = new Hole(data.holeLoc);
    this.walls = Wall.initArray(data.walls);
    this.traps = Sand.initArray(data.traps);
    this.waters = Water.initArray(data.waters);
    this.dimX = dimX;
    this.dimY = dimY;
    //this is the order from bottom to top, Z-index
    this.subItems = [].concat(this.traps, this.walls, this.waters);
    this.subItems.push(this.hole);
    this.subItems.push(this.ball);
    this.strokeCallback = strokeCallback;
    this.mapOverCallback = mapOverCallback;
  }

  toJSON() {
    return JSON.stringify(this.mapData);
  }

  ballMoving() {
    return this.ball.moving();
  }

  tick(ctx) {
    super.tick(ctx);
    this.renderVector(ctx);
    if (this.hole.ballInHole(this.ball)) {
      this.mapOverCallback();
    } else if (this.ballInWater()) {
      this.resetBall();
    } else if (this.ballOffMap()) {
      alert('Cool it, Hercules.');
      this.resetBall();
    }
  }

  ballInWater() {
    let inWater = false;
    const ball = this.ball;
    this.waters.forEach(function (water) {
      if (water.contains(ball)) {
        inWater = true;
      }
    });
    return inWater;
  }

  ballOffMap() {
    return (this.ball.loc.x > this.dimX) ||
      (this.ball.loc.x < 0) ||
      (this.ball.loc.y > this.dimY) ||
      (this.ball.loc.y < 0);
  }

  resetBall() {
    this.ball.loc.x = this.mapData.ballLoc.x;
    this.ball.loc.y = this.mapData.ballLoc.y;
    this.ball.velocity.magnitude = 0;
  }

  render(ctx) {
    GolfDraw.drawBackground(ctx, {
      width: this.dimX,
      height: this.dimY,
      color: 'green'
    });
  }

  renderVector(ctx) {
    if (this.vector) {
      GolfDraw.drawLine(ctx, {
        color: 'aquamarine',
        width: 2,
        start: this.vector.start,
        end: this.vector.end
      })
    }
  }


  hitBall(hitVector) {
    delete this.vector;
    if (hitVector.magnitude < CONSTANTS.MINIMUM_SWING_STRENGTH) {
      return;
    }
    this.strokeCallback();
    this.ball.hit(hitVector.magnitude, hitVector.direction);
  }

  frictionAtLoc(pos) {
    let friction = CONSTANTS.GRASS_FRICTION;
    const ball = this.ball;
    this.traps.forEach(function (trap) {
      if (trap.contains(ball)) {
        friction = trap.friction;
      }
    });
    return friction;
  }

  drawVector(vec) {
    const offsets = vec.toOffsets();
    const start = this.ball.loc;
    this.vector = {
      start: start,
      end: {
        x: start.x + offsets.x,
        y: start.y + offsets.y
      }
    }
  }
};
