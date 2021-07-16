var path;
var pathImage;
var runnerAnimation;
var runner
function preload(){
pathImage=loadImage("path.png")
runnerAnimation=loadAnimation("runner-1.png","runner-1.png","runner-2.png","runner-2.png")

  
}

function setup(){
  createCanvas(300,400);
path=createSprite(150,200,10,10)
path.addImage("path1",pathImage)
path.velocityY=4
runner=createSprite(625,200,10,10)
runner.addAnimation("runner1",runnerAnimation)
runner.scale=0.1
boundary1=createSprite(10,50,10,1100)
boundary1.visible=false;
boundary2=createSprite(290,50,10,1100)
boundary2.visible=false;
}

function draw() {
  background("yellow");
if(path.y>400){
  path.y=height/2
}
runner.x=World.mouseX

runner.collide(boundary1)
runner.collide(boundary2)

 drawSprites()
}
