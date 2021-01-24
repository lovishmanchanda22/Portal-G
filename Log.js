class Log extends BaseClass{
  constructor(x,y,height,angle){
    var options = {
      'restitution':0.5,
      'friction':1.5,
      'density':1.0,
      'isStatic':true
  }
    super(x,y,50,height,angle,options);
    this.image = loadImage("sprites/hole.png");
    Matter.Body.setAngle(this.body, angle);
  }
}