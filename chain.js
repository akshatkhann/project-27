class Chain{

    constructor(bodya,bodyb){
    
    var option={
    bodyA:bodya,
    bodyB:bodyb,
    stiffness:0.04,
    length:550
    
    
    
    }
    this.chain=Constraint.create(option)
    World.add(world,this.chain)
    
    
    }
    
    display(){
    var pointa=this.chain.bodyA.position
    var pointb=this.chain.bodyB.position
    strokeWeight(4)
    line(pointa.x,pointa.y,pointb.x,pointb.y)
    
    
    }
    
    
    
    }