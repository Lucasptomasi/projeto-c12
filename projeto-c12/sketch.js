var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png")
 
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
 path = createSprite(windowWidth/2,windowHeight/2) 
 path.addImage(pathImg)
 path.velocityY = +5
path.scale=1.2;

boy = createSprite(windowWidth/2,windowHeight/1)
boy.addAnimation("w",boyImg)
boy.scale=1;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visible=false
//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
}

function draw() {
  background("black");
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.collide(leftBoundary,rightBoundary[2])
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
