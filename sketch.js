const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var boy, boyImg, stoneobj, tree; 
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7; 
var launcherObject;
var launcherForce=100;

function preload(){
boyImg=loadImage("Images/boy.png");
//stoneImg=loadAnimation("Images/stone.png");
//treeImg=loadAnimation("Images/tree.png");
	
}

function setup() {
	createCanvas(1400, 700);
  engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);
    
	stoneobj = new Stone(100,300,20); 
	tree=new Tree(570,170,500,700);
	mango1=new Mango(500,100,30);
  mango2=new Mango(590,130,30); 
  mango3=new Mango(555,40,30);
  mango4=new Mango(650,110,30);
  mango5=new Mango(560,90,30);
  mango6=new Mango(530,140,30);
  mango7=new Mango(610,70,30);
  ground=new Ground(50,680,2500,20);
  launcherObject=new Launcher(stoneobj.body,{x:235,y:420}); 
 
  
}


function draw() {
  
  background(255);
  Engine.update(engine);

  image(boyImg,180,300,300,500);

  detectCollision(stoneobj,mango1);
  detectCollision(stoneobj,mango2);
  detectCollision(stoneobj,mango3);
  detectCollision(stoneobj,mango4);
  detectCollision(stoneobj,mango5);
  detectCollision(stoneobj,mango6);
  detectCollision(stoneobj,mango7);


 drawSprites()
  //boy.display();
  stoneobj.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  ground.display();
  launcherObject.display();

  fill(0)
  textSize(20)
text("Press space to get another chance to play",50,50,400)
 
}
function mouseDragged(){
  Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcherObject.fly();
}
function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stoneobj.body,{x:235,y:420});
  launcherObject.attach(stoneobj.body);
	}
}

function detectCollision(stone,mango)
{
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=stone.r+mango.r){
  Matter.Body.setStatic(mango.body,false);
}
  
}