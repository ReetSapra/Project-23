var helicopterIMG, helicopterSprite, packageSprite,packageIMG, point1, point2, point3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	point1=createSprite(width/2, 655,200,20)
	point1.shapeColor=color("red");

	point2=createSprite(300, 615,20,100)
	point2.shapeColor=color("red");

	point3=createSprite(500, 615,20,100)
	point3.shapeColor=color("red");

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:false});
	 World.add(world, packageBody);
	 
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
  }
}



