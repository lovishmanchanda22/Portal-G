class Box extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.5,
      'friction':1.5,
      'density':1.0
  }
    super(x,y,width,height,options);
    this.image = loadImage("sprites/wood1.png");
  }

};
