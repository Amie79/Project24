
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper=new paper(x,y,width,height);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine); 
  paper.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){}

Matter.Body.applyForce(paper.body,paper.body.position{x:85,y:-85});

}

