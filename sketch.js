var box;

function setup() {
  createCanvas(800,800);
box = createSprite(200,200,20,20) ; 
box.shapeColor = 'pink'
}

function draw() 
{
background(30);

if(keyDown('right')){
  box.x = box.x+3;
}
if(keyDown('left')){
  box.x = box.x-3;
}
if(keyDown('up')){
  box.y = box.y-3;
}
if(keyDown('down')){
  box.y = box.y+3;
}
drawSprites();
}




