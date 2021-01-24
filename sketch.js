const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var star1, star2, star3, star4, star5;
var hole;

var prize;


var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    box1 = new Box(690,320,90,90);
    box2 = new Box(950,320,90,90);
    box3 = new Box(810,320,90,90);
    box4 = new Box(755,240,90,90);
    box5 = new Box(880,240,90,90);
    box6 = new Box(820,150,90,90);
//   //  pig1 = new Pig(810, 350);
//     log1 = new Log(810,260,300, PI/2);

   star1 = new Star(740,380,20,20);
   star2 = new Star(880,380,20,20);
   star3 = new Star(820,310,20,20);

   prize = new Pig(820,120);
 //  star4 = new Star(740,320,20,20);
 //  star5 = new Star(740,320,20,20);
   
//   //  pig3 = new Pig(810, 220);

  hole =  new Log(1050,200,400, PI);

    
//     log4 = new Log(760,120,150, PI/7);
//     log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,220);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:220});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }else{
        background(0);
    }
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    if(gameState === 'wait'){
        textAlign('CENTER');
        textSize(20);
        fill('yellow');
        stroke(5);
        text('CONGRATULATION.. (PRESS SPACE TO ENTER NEXT LEVEL)', 400,200);

    }
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    // pig1.display();
    // pig1.score();
  //  log1.display();

    box3.display();
    box4.display();
    // pig3.display();
    // pig3.score();
  //  log3.display();

    box5.display();
    box6.display();
  //  log4.display();
   hole.display();


   star1.display();
   star2.display();
   star3.display();

   prize.display();

    bird.display();
  
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory=[];
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}