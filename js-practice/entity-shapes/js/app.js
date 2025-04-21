import { Settings } from "./settings.js";
import { CreateShape } from "./shapes.js";
import { PlayerControls } from "./playerControls.js";
const settings = new Settings();
window.addEventListener('DOMContentLoaded',start);
function start(){
    new PlayerControls(settings);
}