class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.chain.bodyA=null;
    }

    Launch(bodyA){
        this.chain.bodyA=bodyA;
    }

    display(){
       
    }
    
}