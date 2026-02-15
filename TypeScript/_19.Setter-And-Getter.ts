// ! Setter and Getter 

class circle {
    private _radius:number;

    constructor(radius:number) {
        this._radius=radius;
    }
    get radius():number {
        return this._radius;
    }
    set radius(value:number) {
        if(value <=0 ) {
            throw new Error('Radius must be Positive');
        }
        this._radius=value;
    }
}

const getcircle = new circle(10);
console.log(getcircle.radius);
getcircle.radius = 12;
console.log(getcircle.radius);
getcircle.radius = -12;
console.log(getcircle.radius);
