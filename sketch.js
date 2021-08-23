const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = []
var arrows = [];

  
  var playerBase;
  var player;
  var playerArcher;
  var playerArrow;
  var computerBase;
  var computer;
  var computerArcher;


function setup() {
  canvas = createCanvas(1200,800);
  
  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(100, random(450, height - 300), 180, 150);
  player = new Player(100, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(150,playerBase.body.position.y - 180,120,120);

  computerBase = new ComputerBase(width - 200,random(450, height - 300),180,150);
  computer = new Computer(width - 280,computerBase.body.position.y - 153,50,180);
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120);
 
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  playerArcher.display();
  
  computerBase.display();
  computer.display();
  computerArcher.display();
 
  

 // Use for loop to display arrow using showArrow() function
 for (var i = 0; i < arrows.length; i++) {
  showArrows(arrows[i], i);
 }

} 

function keyPressed() {

  if(keyCode === DOWN_ARROW){
    // create an arrow object and add into an array ; set its angle same as angle of playerArcher
    
      var playerArrow = new PlayerArrow(200,300, 20, 10);
      arrows.push(playerArrow);
    
  }
}

function keyReleased () {

  //call shoot() function for each arrow in an array playerArrows
  if (keyCode === RIGHT_ARROW) { 
    var angle=playerArcher.body.angle+PI/2
    arrows[arrows.length - 1].shoot(angle);
  }


}
//Display arrow and Tranjectory
function showArrows( playerArrow,index) {

  playerArrow.display();
  if (playerArrow.body.position.x >= width || playerArrow.body.position.y >= height - 50) {
    Matter.World.remove(world, playerArrow.body);
    arrows.splice(index, 1);
  }

}
