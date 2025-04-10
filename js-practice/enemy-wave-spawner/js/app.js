import { GameSettings } from "./gameSettings.js";
import { Player } from "./player.js";
import { ChangeView } from "./changeview.js"
import { EnemySpawner } from "./enemySpawner.js";
import { Enemy1 } from "./enemyTypes.js";
const gameSettings = new GameSettings();
const player = new Player
({
    x:gameSettings.windowWidth/2,
    y:gameSettings.windowHeight/2
},
    gameSettings
);
const enemySpawner = new EnemySpawner(gameSettings);
//const changeview = new ChangeView(-90,gameSettings,player.playerSprite);
setTimeout(()=>{
    const enemy1 = new Enemy1(gameSettings,player.position);
},3000);
player.playerInputListeners();

