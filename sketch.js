var sea;
var seaImage;
var ship,ship_Animation;
function preload(){
seaImage = loadImage("sea.png");
ship_Animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,600,400);
  sea.addImage(seaImage);
  sea.velocityX = 1;
  sea.scale = 0.3;
  ship = createSprite(200,300,20,20);
  ship.addAnimation("moving",ship_Animation);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  drawSprites();
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }
}