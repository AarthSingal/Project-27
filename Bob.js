class Bob {
    constructor(x,y,radius){
        var bob_options = {
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.bob  = Bodies.circle(x,y,radius,bob_options);
        this.radius = radius;

        World.add(world,this.bob);

    }

    display(){
        
        
        
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.bob.position.x,this.bob.position.y,this.radius,this.radius);
        
        

       

        
    }
}