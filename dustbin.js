class Dustbin{
    constructor(x,y,height){

        var options ={

            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        }
        
        Matter.Body.setAngle(this.body.angle)
        this.body = Bodies.rectangle(x, y, 20, height, options);
        this.width = 20;
        this.height = height;
    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white")
    }

}