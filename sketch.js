var helicopterIMG, helicopterSprite, packageSprite,packageIMG,backgroundImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var edges;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundImg = loadImage("backgroundIMG.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/5,100,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/5, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/5, 100 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxbottomSprite = createSprite(boxPosition+100,boxY+40,200,20);
 	boxbottomSprite.shapeColor = color(255,0,0);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  if (keyCode === LEFT_ARROW)
  {
	  helicopterSprite.x = helicopterSprite.x-7;
	  Body.translate(packageBody, {x:-7, y:0});
  }

  if (keyCode === RIGHT_ARROW)
  {
	  helicopterSprite.x = helicopterSprite.x+7;
	  Body.translate(packageBody, {x:+7, y:0})
  }

  if (keyCode === DOWN_ARROW){
    Body.setStatic(packageBody,false);
  }

  if(packageSprite.isTouching(boxbottomSprite)){
	Body.setStatic(packageBody,true);
  }
  
  drawSprites(); 
}
