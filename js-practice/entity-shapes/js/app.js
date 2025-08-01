import { Settings } from "./settings.js";
import { Boss } from "./boss.js";
import { PlayerControls } from "./playerControls.js";
const settings = new Settings();
window.addEventListener('DOMContentLoaded',start);
function start(){
    new PlayerControls(settings);
    new Boss(settings);
}