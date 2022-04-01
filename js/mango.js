class Mango{
    constructor(x,y,r){
        var options={
        isStatic:true,
        friction:1,
        restitution:0
        }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image=loadImage("Images/mango.png")    
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
    }
display(){
    var pos=this.body.position
    push(); 
    translate(pos.x,pos.y); 
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r*2,this.r*2);
    pop(); 
    }
}