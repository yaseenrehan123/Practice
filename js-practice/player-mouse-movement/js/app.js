import { GameSettings } from "./gameSettings.js";
import { Player } from "./player.js";
import { ChangeView } from "./changeview.js";
const gameSettings = new GameSettings();
const player = new Player
({
    x:gameSettings.windowWidth/2,
    y:gameSettings.windowHeight/2
},
    gameSettings
);
player.playerInputListeners();
console.log();
console.log(player);
