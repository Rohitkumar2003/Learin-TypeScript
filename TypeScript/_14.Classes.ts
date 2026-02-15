

// ! Classes
class Students {
        Name:string;
        studentclass:string;
        RollNo:number;
        SchoolName:string;

    constructor(Name:string,studentclass:string,RollNo:number,SchoolName:string) {
        this.Name=Name;
        this.studentclass=studentclass;
        this.RollNo=RollNo;
        this.SchoolName=SchoolName;
    }

    getStudentName():string {
        return `Hey Student Name:${this.Name}`
    }

    getStduentClass() {
         return`Class ${this.studentclass}`
    }

    getStudentRollNo(){
         return `RollNO:${this.RollNo}`
    }
    getSchoolName():string{
        return `School Name:${this.SchoolName}`
    }
}

const student1 = new Students('John Doe','XII',32,'GLCS');

// console.log(student1.getStudentName());
// console.log(student1.getStduentClass());
// console.log(student1.getStudentRollNo());
// console.log(student1.getSchoolName());

