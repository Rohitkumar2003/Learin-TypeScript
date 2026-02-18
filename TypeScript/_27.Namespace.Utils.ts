// Namespace 
namespace Geometry {

    export const PI = 3.14;

    export class Calc {
        area(widht:number,height:number):number {
            return widht*height;
        }
    } 

    export function cal_area(radius:number):number {
        return Math.PI*radius*radius;
    }
}

console.log(Geometry.PI);
console.log(Geometry.cal_area(6));
const cal = new Geometry.Calc();
console.log(cal.area(3,7));


// nested namespaces
namespace Shape {
    export namespace Circle{
        export const PI = 3.14;
    }
}

console.log(Shape.Circle.PI);