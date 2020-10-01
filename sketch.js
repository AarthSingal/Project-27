
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ropeObject1,ropeObject2,ropeObject3,ropeObject4,ropeObject5;

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,150,400,20);

	bobObject1 = new Bob(190,350,35);
	bobObject2 = new Bob(270,350,35);
	bobObject3 = new Bob(350,350,35);
	bobObject4 = new Bob(430,350,35);
	bobObject5 = new Bob(510,350,35);

	ropeObject1 = new Rope(bobObject1.bob,roof.roof,-70*2,0);
	ropeObject2 = new Rope(bobObject2.bob,roof.roof,-35*2,0);
	ropeObject3 = new Rope(bobObject3.bob,roof.roof,0*2,0);
	ropeObject4 = new Rope(bobObject4.bob,roof.roof,35*2,0);
	ropeObject5 = new Rope(bobObject5.bob,roof.roof,70*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.bob,bobObject1.bob.position,{x:-75,y:-85});
	}
}


