// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Snowfall
// Edited Video: https://youtu.be/cl-mHFCGzYk

let snowFlakeCount = 0
let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('../.././p5/Snowfall_2022_08_22_14_02_20/flakes32.png');
}

function toggleSnow () {
  if (snowFlakeCount == 0){
    snowFlakeCount = 200
  } else {
    snowFlakeCount = 0
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0, "fixed");
  canvas.style('z-index: -1')
  gravity = createVector(0, 0.3);
  for (let x = 0; x < spritesheet.width; x += 32) {
    for (let y = 0; y < spritesheet.height; y += 32) {
      let img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }
}

function draw() {
  clear();
  while (snow.length < snowFlakeCount){
    let x = random(width);
    let y = random(-1000, -100);;
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }

  zOff += 0.1;

  for (flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1);

    flake.applyForce(gravity);
    flake.applyForce(wind);
    if (flake.update() == 10){
      index = snow.indexOf(flake)
      snow.splice(index, 1)
    }
    flake.render();
  }

  pwindowResized = () =>{
    resizeCanvas(windowWidth, windowHeight);
  }
}
