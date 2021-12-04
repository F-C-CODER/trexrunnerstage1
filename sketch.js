
var trex ,trexImage;
var ground,groundImage;

function preload(){//to load the images and sounds
  trexImage=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")

}

function setup(){ //to create the sprites
  createCanvas(600,200)

  trex=createSprite(50,150,20,20)
  trex.addAnimation("trexLabel",trexImage)
  trex.scale=0.7

  ground=createSprite(300,190,600,10)
  ground.addImage("groundLabel",groundImage)
  
 
}

function draw(){
  background("lightgrey")
 
  if(keyDown("space")){
    trex.velocityY=-10
  }
trex.velocityY=trex.velocityY+2

trex.collide(ground)
  
  drawSprites()

}
