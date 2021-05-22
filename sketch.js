var fr 
var mr
function setup() {
  createCanvas(400,400);
  o1 = createSprite(250,100,50,50);
  o2 = createSprite(350,100,50,50);
  o3 = createSprite(150,100,50,50);
  o4 = createSprite(50,100,50,50);
  fr = createSprite(200, 200, 50, 50);
  mr = createSprite(200,50,50,100);
  mr.shapeColor =("green");
  fr.shapeColor = ("green");
  o1.debug = "true";
  o1.shapeColor = "blue";
 o2.debug = "true";
  o2.shapeColor = "green";
  o3.debug = "true";
  o3.shapeColor = "green";
  o4.debug = "true";
  o4.shapeColor = "green";
  o1.velocityX=1;
o2.velocityX=-1;

}

function draw() {
  background(0);
 // mr.x=World.mouseX;
  //mr.y=World.mouseY;
mr.debug="true";
fr.debug="true";
if (isTouching(fr,mr)){


mr.shapeColor = ("red");
fr.shapeColor = ("red");

}
else {
  mr.shapeColor =("green");
  fr.shapeColor = ("green");
}
if (isTouching(o4,mr)){
  o4.shapeColor = ("red");
  mr.shapeColor = ("red");
  
}
else {
  o4.shapeColor =("green");
  mr.shapeColor = ("green");
}

bounceOff(o1,o2);

  drawSprites();
}   
