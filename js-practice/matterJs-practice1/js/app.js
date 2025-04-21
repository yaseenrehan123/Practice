import { Settings } from "./settings.js";
import { CreateOnClick } from "./createonclick.js";
import { DraggingMouse } from "./draggingMouse.js";

start();

function start(){
    const settings = new Settings();
    new CreateOnClick(settings);
    new DraggingMouse(settings);
};