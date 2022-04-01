class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            friction:1,
            density:1.2,
            restitution:0
            }
        this.body=loadImage("Images/boy.png")    
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        }
        display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y); 
        imageMode(CENTER);
        image(pos.x,pos.y,this.width,this.height);
        pop(); 
        }
    }
 