const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
function preload() {
//preload the images here
//backgroundImage = loadImage("images/monster-01.png");
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(200,400,600,5);
  hero = new Hero(400,3,100,100);
  chain = new Fly(hero.body,{x:100,y:465});

}

function draw() {
  rectMode(CENTER);
  background(160);
  Engine.update(engine);
  hero.display();
  ground.display();

  world = engine.world;
  block1.display();


}

function mouseDragged(){
	Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}


