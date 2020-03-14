import GameStateMachine from "./base_classes/game_state_machine";
import WelcomeScreen from "./game_modes/welcome_screen";
import Level from "./game_modes/level";
import MapCreator from "./elite_map_creator";

export default class EliteGolf extends GameStateMachine {
  constructor(parentEl, completionCallback) {
    super(parentEl, completionCallback);
    this.modes = [WelcomeScreen, Level];
    this.completionCallback = completionCallback;
  }
}



window.EliteGolf = EliteGolf;
window.EliteMapCreator = MapCreator;
