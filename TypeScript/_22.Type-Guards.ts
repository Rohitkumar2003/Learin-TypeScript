// Type Guards

// 1. typeof 
    function printId(id:string | number ) {
            if(typeof id === 'string') {
                console.log('Id is string',id)
            }else {
                console.log('Id is Number',id)
            }
    }           

// 2. instanceof
    class Dog {
        bark() {
            console.log(`Woff!... Woff!...`);
        }
    }

    class Cat {
        meow(){
            console.log('meow!...');
        }
    }

    function handlePet(pet:Dog | Cat) {
        if(pet instanceof Dog) pet.bark();
        else pet.meow()
    }

// 3. custom type guard 
    interface Fish {
        swim():void;
    }

    interface Bird {
        fly():void;
    }

    function isFish(pet:Fish | Bird):pet is Fish  {
        return (pet as Fish).swim !== undefined;
    }

    function  move(pet:Fish | Bird) {
        if(isFish(pet)){ 
            pet.swim()
        }else {
            pet.fly()
        }  
    }

    function isString(value:any):value is string {
            return typeof value === 'string';
    }

    function checkedtype(value:string|number) {
        if(isString(value)) console.log('Value is string');
        else console.log('Value is Number');
    }

    checkedtype(10)