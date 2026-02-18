
interface userRecords  {
    name?:string;
    age:number;
    email:string;
}

// Partial 
const updateUser = (user:Partial<userRecords>) => {
    console.log('Partial:',user);
}

console.log('Partial:', updateUser({name:'Rohit'}));
// updateUser({age:23});
// updateUser({email:'Mr.developer2003@gmail.com'});

type Users1 = Partial<userRecords>;
let userss:Users1 = {
    name:'John',age:23,email:'John24@gmail.com'
}

// console.log(userss);

// required 

    type user2 = Required<userRecords>;
    let getuser :user2 = {
        name:'Smith',
        age:23,
        email:'Smith924@gmail.com'
    }

    getuser.name = 'BlackSmith';
    console.log('Required:', getuser);

// ReadReadonlyonly
type userRecord2 = Readonly <userRecords>;

    let usr : userRecord2 = { 
        name:'Mr.Hola',
        age:32,
        email:'Mr.holla023@gmail.com'
    }
    // usr.name = 'hollla' // Not declare in Readonly types
    console.log('Readonly:',usr);

// Pick 
type userInfo = Pick<userRecords, 'name' |'email' >;
    const userinfo:userInfo = {
        name:'Neeraj',
        email:'Neeraj494954@gmail.com'
        // age:22,throw err -> Object literals may only specific known properties 'age' does not exist in type userInfo 
    }

// Omit 
    type userWithoutEmail = Omit<userRecords,'email'>;
        const userOmitinfo:userWithoutEmail = {
        name:'Neeraj',
        // email:'Neeraj494954@gmail.com' throw err -> Object literal may only specify known properties, and 'email' does not exist in type 'userWithoutEmail
        age:31,
    }
    console.log('Pick:',userOmitinfo);

// Record 
    type userRecordInfo = Record<string,number>;
        let UserInfoRecord:userRecordInfo =  {
            totalRequest:200,
            APICallRateLimiting:100,

        }
        console.log('Record:', UserInfoRecord);

    type Role = 'Admin' | 'User' | 'Guest';
    const userRoles:Record<Role, string> = {
        Admin:'Rohit',
        User:'John',
        Guest:'Barele'
    };

    console.log('Record:', userRoles.Admin);

    // Exclude
    type stat = 'Success' | 'Error' | 'Loading'
    type ExcludeError = Exclude<stat,'Error'>;
    const stat1:ExcludeError = 'Success';
    const stat2:ExcludeError = 'Loading';

    console.log('Exclude 1:',stat1);
    console.log('Exclude 2:',stat2);

    // Extract 
    type ExtractError = Extract<stat,'Error' | 'Loading'>;
    const statErr:ExtractError = 'Loading';
    console.log('Extract:', statErr);


    //Non - Nullable 
    type MaybeUser = string | null | undefined;
    type userNull = NonNullable<MaybeUser>;
     
    const userNull : userNull = 'Yes';
    console.log('Non-Nullable:',userNull);

    // Return type 
    function getType() {
        return {name:'Rohit', age:23}
    }

    type userReturnType = ReturnType<typeof getType>;
    const userType:userReturnType = {name:'Alice',age:26};
    console.log('Return Type:', userType); 

    // Paramters 
    function updateUserData(name:string, age:number) {
        console.log(`Name:${name},Age:${age}`);
    } 

    type updateUserParams = Parameters<typeof updateUserData>;  
        const params:updateUserParams = ['Carl',43];
        console.log('Paramters:',params);

    // Constructor 

    class UserData {
        constructor(public name:string,public age:number){

        }
    }

    type userConstructorParams = ConstructorParameters<typeof UserData>;
    const userParams:userConstructorParams = ['Dewill',54]; 
    console.log('Constructor:',userParams);