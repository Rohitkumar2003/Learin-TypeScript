
// ! Type-Inference-And-Type-Assertion

// Ts Type-Inference
let username = 1;
    username = 'Hey'

// Ts Type-Assertion
let someValue:any = 'Hello';
let strLenght:number = (someValue as string).length; 
console.log(strLenght);