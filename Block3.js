class Block3{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<6){
          push();
          translate(this.body.position.x, this.body.position.y);
          fill('green')
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
  
        else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity-5;
          tint(255,this.visiblity);
          pop();
        }
      }
}