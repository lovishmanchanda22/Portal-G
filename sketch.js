const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, pig3;
var backgroundImg, platform;
var bird, slingshot;
var star1, star2, star3, star4, star5;
var hole;

var prize;

var lives = 3;


var gameState = "level1";
var bg;
var bgl2;
var score = 0;
var birdState = 'onSling';

function preload() {

    bg = "sprites/bg1.jpg";

    bgl2 = loadImage('sprites/bg2.jpg');


    backgroundImg = loadImage(bg);
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);

    createlevel1();
}

function draw() {

   

    Engine.update(engine);

    if (gameState === 'level1') {

        if (backgroundImg) {
            background(backgroundImg);
        } else {
            background(0);
        }


        box1.display();
        box2.display();

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

    if (gameState === 'wait') {
        if (backgroundImg) {
            background(backgroundImg);
        } else {
            background(0);
        }
        textAlign('CENTER');
        textSize(20);
        fill('yellow');
        stroke(5);
        text('CONGRATULATION.. (PRESS SPACE TO ENTER NEXT LEVEL)', 300, 200);
        if (keyIsDown(32)) {
            gameState = 'level2';
            createlevel2();
            lives = 3;
        }
    }
    if (gameState === 'level2') {

        if (bgl2) {
            background(bgl2);
        } else {
            background(0);
        }

        box1.display();
        box2.display();

        

        box3.display();
        box4.display();
        
        box5.display();
        box6.display();
       
        hole.display();


        star1.display();
        star2.display();
        star3.display();

        prize.display();

        bird.display();

      
        slingshot.display();

    }

    

    ground.display();

    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width - 300, 50)
    text("Lives left =  " + lives, width - 600, 50)

    if(gameState === 'success'){

        textAlign('CENTER');
        textSize(20);
        fill('yellow');
        stroke(5);
        text('CONGRATULATION.. (PRESS F5 TO PLAY AGAIN)', 300, 200);
        if (keyIsDown(91)) {
            gameState = 'level1';
            createlevel2();
            lives = 3;
        }

    }else if(lives === 0){
        textAlign('CENTER');
        textSize(20);
        fill('yellow');
        stroke(5);
        text('(PRESS F5 TO TRY AGAIN)', 300, 200);
        if (keyIsDown(91)) {
            gameState = 'level1';
            createlevel2();
            lives = 3;
    }}

    

}

function mouseDragged() {
    if (birdState!=="launched"){
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
    }
}


function mouseReleased() {
    slingshot.fly();
    birdState = "launched";
}

function keyPressed() {
    if (keyCode === 32 && lives > 0) {
        lives--
        birdState = 'onSling';
        slingshot.attach(bird.body);
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body, { x: 200, y: 200 });
    }
}



function createlevel1() {
    box1 = new Box(690, 320, 90, 90);
    box2 = new Box(950, 320, 90, 90);
    box3 = new Box(810, 320, 90, 90);
    box4 = new Box(755, 240, 90, 90);
    box5 = new Box(880, 240, 90, 90);
    box6 = new Box(820, 150, 90, 90);
   
    star1 = new Star(740, 380, 20, 20);
    star2 = new Star(880, 380, 20, 20);
    star3 = new Star(820, 310, 20, 20);

    prize = new Pig(820, 120);
    
    hole = new Log(1050, 200, 400, PI);


   

    bird = new Bird(200, 220);

    
    slingshot = new SlingShot(bird.body, { x: 200, y: 220 });
}

function createlevel2() {

   // pig1.body.position.x = 820;
   
}