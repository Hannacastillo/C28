class SlingShot{

 constructor(body1,point2){
    var options={

        bodyA:body1,
        pointB:point2,
        stiffness:.04,
        length:30
      
      }
      
     this.sling=Matter.Constraint.create(options);
      World.add(myworld,this.sling)

 }  
 
 display(){
 strokeWeight(4)

 if (this.sling.bodyA!=null)
 {

 line(this.sling.bodyA.position.x, this.sling.bodyA.position.y,this.sling.pointB.x,this.sling.pointB.y)    
 }
 }

 fly(){
this.sling.bodyA=null

 }

}