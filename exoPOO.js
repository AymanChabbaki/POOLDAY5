class shape {
    constructor(color){
        this.color=color;
    }
    describe(){
        console.log('This is a '+this.color+'shape.')
    }
}
class Circle extends shape{
    constructor(radius,color){
        super(color);
        this.radius=radius;
    }
    describe(){
        console.log('This is a '+this.color+' circle with a radius of '+this.radius+'.');
    }
}
Circle= new Circle(5,'red');
Circle.describe();
