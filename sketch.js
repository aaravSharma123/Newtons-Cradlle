var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,400,40);

	bobObject1 = new Bob(300,500,25);
	bobObject2 = new Bob(350,500,25);
	bobObject3 = new Bob(400,500,25);
	bobObject4 = new Bob(450,500,25);
	bobObject5 = new Bob(500,500,25);


	rope1 = new Rope(bobObject1.body,ground.body,-100,0) 
	rope2 = new Rope(bobObject2.body,ground.body,-50,0) 
	rope3 = new Rope(bobObject3.body,ground.body,0,0) 
	rope4 = new Rope(bobObject4.body,ground.body,50,0)
	rope5 = new Rope(bobObject5.body,ground.body,100,0)
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  



  drawSprites();
 
}


