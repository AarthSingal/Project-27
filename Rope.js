class Rope{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx = offsetx;
        this.offsety = offsety;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offsetx,y:this.offsety}
            //length : 20,
            //stiffness : 0.03 
        }
        this.rope = Constraint.create(options);

        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        fill("white");
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x + this.offsetx,pointB.y + this.offsety);
    }
}