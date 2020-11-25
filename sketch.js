var car,wall;
var speed,weight;
function setup() {
  createCanvas(1000,400);
  car = createSprite(20, 200, 50, 50);
  wall = createSprite(800,200,60,height/2);
  wall.shapecolor = "red";
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background("blue");
  car.velocityX = speed;
  if(wall.x-car.x<(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation=0.5 * speed * weight * speed/22509;
    if(deformation>180){
      car.changecolor = yellow;
    }
    if(deformation<180 && deformation>180){
      car.changecolor = red;
    }
    if(deformation>100){
      car.changecolor = green;
    }
  }
 drawSprites();
 
}