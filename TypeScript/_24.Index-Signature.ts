
interface stringArr  {
    [index:number]:string;
}

let arr1 :stringArr = ['Code','With','Rohit'];

console.log(arr1[2]);


interface Fruits {
    [key:string]:string;
}

let fruitsArr : Fruits = {
    apple:'Red Fruits',
    Banana:'Yellow Fruits',
    Gauava:'Green Fruits'    
}
console.log(fruitsArr['apple']);