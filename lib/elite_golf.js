import GameStateMachine from "./base_classes/game_state_machine";
import WelcomeScreen from "./game_modes/welcome_screen";
import Level from "./game_modes/level";
import MapCreator from "./elite_map_creator";

export default function EliteGolf($parentEl, completionCallback){
  GameStateMachine.call(this, $parentEl, completionCallback);
  this.modes = [WelcomeScreen, Level];
  this.completionCallback = completionCallback;
}

EliteGolf.prototype = Object.create(GameStateMachine.prototype);


window.EliteGolf = EliteGolf;
window.EliteMapCreator = MapCreator;
