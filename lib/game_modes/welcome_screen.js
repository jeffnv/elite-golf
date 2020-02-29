import GameMode from "../base_classes/game_mode";
import GolfDraw from "../util/golf_draw";
import GolfMath from "../util/golf_math";

export default class WelcomeScreen extends GameMode {
  constructor(canvas, $gameModeSpace, changeGameMode) {
    super(canvas, $gameModeSpace, changeGameMode);

    this.playButtonAttrs = {
      radius: 150,
      centerX: 250,
      centerY: 250,
      color: 'green'
    };
  }

  registerEvents() {
    this.addEvent(this.canvas, 'mousedown', this.handleClick);
  }

  handleClick(event) {
    event.preventDefault();
    //figure out which thing was clicked on, trigger appropriately
    const clickLoc = { x: event.offsetX, y: event.offsetY };
    if (this.insideButton(clickLoc, this.playButtonAttrs)) {
      this.changeGameMode();
    }
  }

  insideButton(coords, buttonAttrs) {
    const center = { x: buttonAttrs.centerX, y: buttonAttrs.centerY };
    const dist = GolfMath.distBtwPoints(coords, center);
    return dist <= buttonAttrs.radius;
  }

  startAction() {
    GolfDraw.drawBackground(this.ctx, { width: this.width, height: this.height, color: 'white' });
    GolfDraw.drawText(this.ctx, "CLICK GREEN THING");
    GolfDraw.drawCircle(this.ctx, this.playButtonAttrs);
  }
}
