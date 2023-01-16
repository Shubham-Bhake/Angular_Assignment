 interface Shape{

Height:Number;
Radius:Number;
lenght:Number;
pie:Number;


    areaOfShape:()=>Number;
}

var rectangle:Shape={

    Height:10,
    Radius:1,
    lenght:10,
    pie:3.14,

    areaOfShape:()=> {
      return (this.Height *this.lenght); 
}
}
console.log(rectangle.areaOfShape());
var cone: Shape={

  Height:10,
  Radius:1,
  lenght:10,
  pie:3.14,
  areaOfShape:()=> {
    return (this.pie * this.Radius * this.Height + this.pie * this.Radius * this.Radius);
    
}
}
console.log(cone.areaOfShape());
var sphere: Shape={

  Height:10,
  Radius:1,
  lenght:10,
   pie:3.14,

  areaOfShape:()=> {
    return (4*this.pie *(this.Radius*this.Radius));
}

}
console.log(sphere.areaOfShape());
// console.log(rectangle.areaOfShape());
// console.log(cone.areaOfShape());
// console.log(sphere.areaOfShape());


