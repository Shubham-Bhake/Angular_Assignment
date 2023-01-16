var _this = this;
var rectangle = {
    Height: 10,
    Radius: 1,
    lenght: 10,
    pie: 3.14,
    areaOfShape: function () {
        return (_this.Height * _this.lenght);
    }
};
console.log(rectangle.areaOfShape());
var cone = {
    Height: 10,
    Radius: 1,
    lenght: 10,
    pie: 3.14,
    areaOfShape: function () {
        return (_this.pie * _this.Radius * _this.Height + _this.pie * _this.Radius * _this.Radius);
    }
};
console.log(cone.areaOfShape());
var sphere = {
    Height: 10,
    Radius: 1,
    lenght: 10,
    pie: 3.14,
    areaOfShape: function () {
        return (4 * _this.pie * (_this.Radius * _this.Radius));
    }
};
console.log(sphere.areaOfShape());
// console.log(rectangle.areaOfShape());
// console.log(cone.areaOfShape());
// console.log(sphere.areaOfShape());
//# sourceMappingURL=Interface.js.map