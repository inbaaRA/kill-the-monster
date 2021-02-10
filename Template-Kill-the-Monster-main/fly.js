class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.8,
            length:200

        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
      //  var pointA=this.fly.bodyA.position;
        //var pointB=this.pointB;
        strokeWeight(0);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y-20,this.pointB.x,this.pointB.y);

    }
}