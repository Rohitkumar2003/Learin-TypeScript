//! Literals Types
    //string literals
type Orderstatus = 'delivered' | 'pending' | 'Cancelled';
     let orders:Orderstatus = 'delivered';
     
     let answer: 'Yes' | 'No';
         answer = 'Yes';

         console.log('Your Order Status:',orders);
         console.log('Your Choosing Options:',answer);

    // numbers literals
    let count = 0 | 1 | 2
        count  = 2

        console.log('Your Count Options:',count);

    // boolean literals
    let isVisible :true | false
        isVisible = true;

        console.log('Is Visible Value:',isVisible);

    type LiteralType = 'hello' | 'Hey' | 'Namaste' | 10 | false | {name:string ,age:number} 

    type Actions = 'Add'|'Update'|'Delete'|'Replace'
        
        function takeActions(actions:Actions) {
            if(actions==='Add') console.log('Add Function');
            if(actions==='Update') console.log('Update Function');
            if(actions==='Delete') console.log('Delete Functions');
            if(actions==='Replace') console.log('Replace Functions');
        }

        takeActions('Add');


        function printStatus(status:'Success' | 'Error' | 'Loading'):void {
            console.log('Current Status:',status);
        }

        printStatus('Success')


        // Literals in Interfaces 

        interface ButtonConfig {
            size:'Small' | 'Medium' | 'Large'
            color: 'Red' | 'Green' | 'Blue'
        };

        const btn:ButtonConfig={
            size:'Medium',
            color:'Green'
        }

        console.log(btn);