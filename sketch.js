frames = 60;

var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 100, 20);
  bullet.shapeColor = (255);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet.velocityX = speed

}

function draw() {
  background("black");  

  if (hasCollided(bullet, wall)){
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
  
    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  
    bullet.velocityX = 0;
  }

  drawSprites();
}

function hasCollided(obj1, obj2){
  if (obj2.x - obj1.x <= (obj2.width + obj1.width) / 2){

    return true;

  } else {

    return false;

  }
}