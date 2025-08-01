import { Game } from "./game";
import { GameOptions } from "./types";

start();
function start(){
    const gameOptions:GameOptions = {}
    const game:Game = new Game(gameOptions);
}