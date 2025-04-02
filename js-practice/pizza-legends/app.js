import * as overworldScript from './overworld.js';
const overworld = new overworldScript.Overworld({element:document.querySelector('.game-container')});
overworld.init();