var movingRect, fixedRect;

function setup() {
  createCanvas(400,400);
 movingRect = createSprite(100, 200, 50, 50);
 movingRect.shapeColor = "red";


 fixedRect = createSprite(250,200,40,80);
 fixedRect.shapeColor ="yellow";
}

function draw() {
  background("lightgreen");  

  movingRect.x = mouseX;
  movingRect.y =mouseY;

  // R.x - Y.x < R.width/2 + Y.width/2;    Right
  // Y.x - R.x < R.width/2 + Y.width/2;    Left

  // R.y - Y.y < R.height/2 + Y.height/2;  Bottom
  // Y.y - R.y <  R.height/2 + Y.height/2; Top

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
     fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor ="purple";
  }

  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor ="yellow";
  }
  drawSprites();
}
