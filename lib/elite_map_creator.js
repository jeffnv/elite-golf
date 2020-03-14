import WelcomeScreen from "./game_modes/welcome_screen";
import MapCreator from "./game_modes/map_creator";
import GameStateMachine from "./base_classes/game_state_machine";

export default class EliteMapCreator extends GameStateMachine {
  constructor(parentEl, payloadReadyCallback) {
    super(parentEl, payloadReadyCallback);
    this.modes = [WelcomeScreen, MapCreator];
  }

};


