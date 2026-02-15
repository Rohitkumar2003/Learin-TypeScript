

        //!  function type Annotation 

        function addNumbers(a:number,b:number):number {
            return a+b;
        }


    //!  console.log(addNumbers(2,4));

    // function expression 
        const divide = function(a:number,b:number):number {
            return a+b;
        }

        //!  console.log(divide(3,4));

        // Arrow function 

        const multiply = (a:number,b:number):number => {
            return a*b;
        }

    //    console.log(multiply(3,4));
        
    //! optinal  parameters
        function greet(username:string, msg?:string):string {
            return `Hey ${username}, ${msg ? msg : ''}`
        }

        console.log(greet('John Doe','You are login Successfull....'));

        //! default Parameters  
        function greet1(username:string, msg:string = 'Loggin Successfull...'):string {
            return `Hey ${username}, ${msg}`
        }
        console.log(greet1('Michel'));

        // ! function overloading 

        function getLenght(value:string):number;
        function getLenght(value :any[]):number;
        function getLenght(value :any) :any {
            return value.length;
        }

        console.log('words is:', getLenght( 'Good Morning'));
        
        console.log(getLenght([1,2,3,4,4]));

        // ! Rest Parameters 
        function sum(...numbers:number[]):number {
            return numbers.reduce((total,num)=>{
                return total+num
            },0);
        }
        console.log(sum(2,3,5));
        const greetings = ( userMsg:string,...userName:string[]):void => {
                userName.forEach(() => {
                    console.log(`${userMsg},${userName}`,);
                })
        }
        greetings('Rohit,Smith,john','You are Lucky Winner');

