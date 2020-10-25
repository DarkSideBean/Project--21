var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  
  wall=createSprite(1200,200,50,height/2);
  wall.shapeColor=rgb(80,80,80);

  speed=random(220,321);
  weight=random(30,52);
  thickness=random(22,80)

  bullet=createSprite(50,200,50,20);
  bullet.shapeColor ="yellow";

  bullet.velocityX = speed;

  

}

function draw() {
  background("black");  
  drawSprites();

  if (hasCollided(bullet, wall))
  {
    bullet.velocityX=0;

    var damage=(0.5 * weight * speed *speed)/(thickness*thickness*thickness);

    if(damage>10){
    wall.shapeColor=rgb(255,0,0)
    }
    if(damage<10)
    {
      wall.shapeColor=rgb(0,255,0)
    }
  }
}
function hasCollided(lbullet, lwall) 
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}