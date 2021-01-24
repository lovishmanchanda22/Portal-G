class Pig extends BaseClass {
  constructor(x, y){
    var options = {
      'restitution':1,
      'frictionAir':0.001,
      'density':0.1,
      'frictionAir':0.01
  }
    super(x,y,50,50,options);
    this.image = loadImage("sprites/gold.png");
    this.Visiblity = 255;
  }

  display(){
    if(this.body.position.x>=1000){
      gameState = 'wait';
      World.remove(world, this.body);
      if(score < 500){
        score = score +10;
      }
  }else{

  
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0-this.width/2, this.width*2, this.height*2);
    pop();}
  }
  
//  display(){
//    //console.log(this.body.speed);
//    if(this.body.speed < 3){
//     super.display();
//    }
//    else{
//      World.remove(world, this.body);
//      push();
//      this.Visiblity = this.Visiblity - 5;
//      tint(255,this.Visiblity);
//      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
//      pop();
//    }
//   }

//   score(){
//     if (this.Visiblity < 0 && this.Visiblity > -1005){
//       score++;
//     }
//   }



};