class Paper{

constructor(x,y,height,width){

var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

this.body=Body.circle(x,y,height,width,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}

display(){
var pos=this.body.position;

rectMode(CENTER);
strokeWeight(5);
stroke("pink");
fill(255);
rect(0,0,this.width,this.height);


}

}