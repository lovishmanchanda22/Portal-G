class Star extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.5,
      'friction':1.5,
      'density':1.0
  }
    super(x,y,width,height,options);
    this.image = loadImage("sprites/star.png");
  }



  display(){
    console.log(this.body.speed);
    if(this.body.speed>2.5){
      World.remove(world,this.body)
      if(score < 100){
        score = score +1;
      }
    }else {

    super.display();
  }
}
};
