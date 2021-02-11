var weight,speed;
var wall,bullet,thickness;
var BRE,WLE;
function setup(){
 createCanvas(1600,400);
  bullet = createSprite(300,200,BRE,5);
  bullet.shapeColor="white"
BRE=random(5,9)
WLE=random(50,90)
wall = createSprite(1200,200,WLE,200)
speed=random(50,90);
weight=random(400,1500);
thickness=random(20,83);
bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(wall.x-bullet.x<(bullet.width + wall.width)/2){ 
    bullet.stactic=true
 var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  if( damage>10) 
  {
    wall.shapeColor=color(255,0,0)
  }
  if( damage<10) 
  {
  wall.shapeColor=color(0,255,0)
  }
  
  }

  drawSprites();
}