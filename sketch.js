const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22;

var ground1, ground2, ground3;

var slingshot;
var hex;
var ball;
var hexImg;

var gameState = "onSling";

function preload() {
  hexImg = loadImage("hexagon (1).png");
}

function setup() {

  var canvas = createCanvas(1250,600);
  engine = Engine.create();
  world = engine.world;
 

  block1 = new Block(600, 260, 30, 40);
  block2 = new Block(570, 260, 30, 40);
  block3 = new Block(540, 260, 30, 40);
  block4 = new Block(630, 260, 30, 40);
  block5 = new Block(660, 260, 30, 40);


  block6 = new Block(585, 220, 30, 40);
  block7 = new Block(555, 220, 30, 40);
  block8 = new Block(615, 220, 30, 40);
  block9 = new Block(645, 220, 30, 40);


  bolck10 = new Block(600, 170, 30, 40);
  block11 = new Block(570, 180, 30, 40);
  block12 = new Block(630, 180, 30, 40);


  block13 = new Block(600, 140, 30, 40);

  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900, 195, 200, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  block14 = new Block(900, 170, 30, 40);
  block15 = new Block(930, 170, 30, 40);
  block16 = new Block(870, 170, 30, 40);
  block17 = new Block(840, 170, 30, 40);
  block18 = new Block(960, 170, 30, 40);


  block19 = new Block(900, 140, 30, 40);
  block20 = new Block(930, 140, 30, 40);
  block21 = new Block(870, 140, 30, 40);
  block22 = new Block(900, 110, 30, 40);

  hex = new Hex(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingshot = new Slingshot(this.ball,{x:150, y:160});

}

function draw() {

  if(backgroundColor="black")
  background("black");

  Engine.update(engine);

  fill("Lightskyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("Cornflowerblue");
  bolck10.display();
  block11.display();
  block12.display();

  fill("Lightsteelblue");
  block13.display();

  fill("springgreen");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("mediumspringgreen");
  block19.display();
  block20.display();
  block21.display();

  fill("lightgreen");
  block22.display();
  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  slingshot.display();
  gettime()
}


function mouseDragged() {
  if (gameState!=="launched"){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
}


function mouseReleased() {
  slingshot.fly();
  gameState = "launched";

}


function keyPressed() {

	if(keyCode === 32) {
			//slingshot.attach(hex.body);
  }
  
}

async function gettime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  //console.log(responseJSON.datetime)
  var dt = responseJSON.datetime
  var hour= dt.slice(11,13)
  console.log(hour)

  if(hour >= 06 && hour <= 19){
      bg("lavender")
  }

  else {
      bg("black")
  }

  backgroundImg=loadImage(bg)
}

//Made by Divyansha