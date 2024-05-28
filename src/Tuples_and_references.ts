//Tuples

type studentType = [string,(100|200|300|400|500|600),number]

class student{
    constructor(
        readonly student:studentType
    ){}
    format(){
        console.log(`${this.student[0]} of Reg number ${this.student[2]} is in ${this.student[1]} level`)
    }
}

const Student1 = new student(["Habib",200,34543])

Student1.format()

