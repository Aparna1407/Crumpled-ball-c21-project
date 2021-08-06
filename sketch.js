
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options={
	isStatic:true
}
	ground=Bodies.rectangle(400,675,800,50,options)
	World.add(world,ground);

	wall1=Bodies.rectangle(500,600,10,100,options)
	World.add(world,wall1);

	wall2=Bodies.rectangle(700,600,10,100,options)
	World.add(world,wall2);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(100,600,10,ball_options)
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(CENTER);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,800,50);
  ellipse(ball.position.x,ball.position.y,20,20);
  rect(wall1.position.x,wall1.position.y,10,100)
  rect(wall2.position.x,wall2.position.y,10,100)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:15,y:-15})
	}
}

