
// numbers
let num:number = 123_456_789 ;
console.log('num: ', num);

// bigInt
let num1:bigint = 9823049823982n;
console.log('big int: ',num1);

// Characters
let characters  = 'Coding Blocks';
console.log('Characters: ', characters);

// boolean
let isAvailble :boolean = true;
console.log('is Available: ', isAvailble);

// Number Arr
let numArr: number[] = [1,2,4,4,5,6,7];
console.log('number arr: ', numArr);

// Char Arr
let charArr: string[] = ['holla','hey','dejaVyu'];
console.log('char Arr: ', charArr);

// Undefined
let val:undefined = undefined;
console.log('Val value: ', val);

// Null
let getVal : null = null;
console.log('get value: ', getVal);

// object
let obj:{name:string,age:number,isMarried:boolean} = {
    name:'John Doe',
    age:23,
    isMarried:false,
   
}


console.log('objects: ', obj);

let object1 = {...obj,age:24};
console.log(object1);

