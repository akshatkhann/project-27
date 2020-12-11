

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint=Matter.Constraint;
var chain1
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
 paper1=new Paper(710,500,45,45);
 paper2=new Paper(710,1200,45,45);
 paper3=new Paper(710,1000,45,45);
 paper4=new Paper(710,1100,45,45);
 ground=new Ground(400,350,600,10)
 ground2=new Ground(470,350,600,10)


 ground3=new Ground(540,350,600,10)
 ground4=new Ground(610,350,600,10)




 chain1=new Chain(paper4.body,ground2.body)
chain4=new Chain(paper2.body,ground.body)
chain3=new Chain(paper3.body,ground3.body)

chain2=new Chain(paper1.body,ground4.body)
}


function draw() {
  rectMode(CENTER);
  background(255);
 
 Engine.update(engine)
 ground.display()
paper1.display()
paper2.display()
paper3.display()
paper4.display()
chain1.display()
chain2.display()
chain3.display()
chain4.display()
ground2.display()
ground3.display()
ground4.display()


}