const canvas = document.querySelector('my-canvas');
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
    background(220); // optional, clears the screen every frame
    rect(100, 100, 50, 50); // your rectangle
  }