
var manImg,bgImg
var man






function preload(){

    manImg = loadAnimation("MAN 1.JPG","MAN 2.PNG","MAN 3.PNG","MAN 4.JPG")
    bgImg = loadImage("BACKGROUND CAVE.JPG")
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    ground = createSprite(50,180,400,20);
  ground.addImage("bgImg",bgImg);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  ground.scale = 0.7
  
  boy = createSprite(119,428,20,20)
  boy.addAnimation("manImg",manImg);
}

function draw(){
    background(0)
    if (ground.x < 0){
        ground.x = ground.width/2;
      }
      text(mouseX+"x" +mouseY+"y",mouseX-10,mouseY);
    drawSprites()
}

