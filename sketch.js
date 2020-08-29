var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  movingRect = createSprite(800,200,30,80);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.debug= true;
  movingRect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 console.log( movingRect.x - fixedRect.x);
  if(Math.abs(movingRect.x-fixedRect.x )<= movingRect.width/2+fixedRect.width/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";

  }

  drawSprites();
}