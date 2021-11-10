
var sprite1;

var edges;
var mazePart1;
var mazePart2;
var mazePart3;
var mazePart4;
var mazePart5;



function setup() {
  createCanvas(400,400);
  mazePart1 = createSprite(100,75,175,15);
  mazePart2 = createSprite(80,125,140,15);
  mazePart3 = createSprite(143,175,15,100);
  mazePart4 = createSprite(180,130,15,100);

  edges=createEdgeSprites();
  sprite1 = createSprite(200,200,20,20);
  
  
  
}



function draw() 
{
  
  background(0,255,0);
  
  drawSprites();
  if(keyIsDown(UP_ARROW)) {
    sprite1.y -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    sprite1.y += 10;
  }
  if(keyIsDown(LEFT_ARROW)) {
    sprite1.x -= 10;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    sprite1.x += 10;
  }
  sprite1.bounceOff(edges[0]);
  sprite1.bounceOff(edges[1]);
  sprite1.bounceOff(edges[2]);
  sprite1.bounceOff(edges[3]);

  sprite1.bounce(mazePart1);
  sprite1.bounce(mazePart2);
  sprite1.bounce(mazePart3);
  sprite1.bounce(mazePart4);
  
  

}




