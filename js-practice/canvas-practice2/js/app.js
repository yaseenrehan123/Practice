import { LoadAssets } from "./loadAssets.js";
import { Game } from "./game.js";
import { Player } from "./player.js";
const loader = new LoadAssets();
loader.preloadImages((images) => {
    start(images);
    
});
function start(images){
    const options = {
        loadedImages: images,
    }
    const game = new Game(options);
    const player = new Player(game);
    console.log('start called');
};