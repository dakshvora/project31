const Engine = Matter.Engine;
const World = Matter.World;
//const  Events = Matter.Events,
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var ground;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 10);
//DIVISION
  for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //PLINKOS
  for(var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 75; j<=width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background("black");  
Engine.update(engine)
ground.display();

//DIVISION
for(var k =0; k<divisions.length; k=k+1){
  divisions[k].display();
}
//PLINKOS
for(var j =0; j<plinkos.length; j=j+1){
  plinkos[j].display();
}
//particles

if(frameCount%60===0){
particles.push(new Particle(random(width/2-30, width/2+30), 10,10));

}
for(var i =0; i<particles.length; i=i+1){
  particles[i].display();
}





  drawSprites();
}
