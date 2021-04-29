var a;
var b;
function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 80, 80);
  b = createSprite(600,200,80,80);
  a.shapeColor = "blue";
  b.shapeColor = "blue";
}

function draw() {
  background("black");  
  drawSprites();
  b.x = mouseX;
  b.y = mouseY;
  if(b.x-a.x < b.width/2 + a.width/2 &&
    a.x-b.x < b.width/2 + a.width/2 &&
    b.y-a.y < b.height/2 + a.height/2 &&
    a.y-b.y < b.height/2 + a.height/2){
    b.shapeColor="orange";
    a.shapeColor="orange";
  }
  else{b.shapeColor="blue";
a.shapeColor="blue";}
  
}