"use strict";

// src/game.ts
var Game = class {
  canvas = null;
  ctx = null;
  canvasWidth = 0;
  canvasHeight = 0;
  defCanvasWidth = 680;
  defCanvasHeight = 600;
  lastFrameTime = 0;
  deltaTime = 0;
  constructor(options) {
    this.init(options);
    this.start();
    requestAnimationFrame(this.update);
  }
  init(options) {
    this.canvas = options.canvas ?? null;
    if (!this.canvas) {
      const newCanvas = document.createElement("canvas");
      this.canvas = newCanvas;
      document.body.appendChild(this.canvas);
    }
    ;
    this.ctx = this.canvas.getContext("2d");
    if (!this.ctx) throw new Error("CTX NOT FOUND!");
    this.canvasWidth = options.canvasWidth ?? 0;
    this.canvasHeight = options.canvasHeight ?? 0;
    if (this.canvasWidth === 0) this.canvasWidth = this.defCanvasWidth;
    this.canvasHeight = options.canvasHeight ?? 0;
    if (this.canvasHeight === 0) this.canvasHeight = this.defCanvasHeight;
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }
  start() {
  }
  update(timeStamp) {
    this.deltaTime = (timeStamp - this.lastFrameTime) / 1e3;
    this.lastFrameTime = timeStamp;
  }
  getCanvas() {
    return this.canvas;
  }
  getCtx() {
    return this.ctx;
  }
  getDeltaTime() {
    return this.deltaTime;
  }
};

// src/app.ts
start();
function start() {
  const gameOptions = {};
  const game = new Game(gameOptions);
}
//# sourceMappingURL=app.js.map