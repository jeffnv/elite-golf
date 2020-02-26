import WelcomeScreen from "./game_modes/welcome_screen";
import MapCreator from "./game_modes/map_creator";
import GameStateMachine from "./base_classes/game_state_machine";

export default function EliteMapCreator($parentEl, payloadReadyCallback){
  GameStateMachine.call(this, $parentEl, payloadReadyCallback);
  this.modes = [WelcomeScreen, MapCreator];
}

EliteMapCreator.prototype = Object.create(GameStateMachine.prototype);
