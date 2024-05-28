"use strict";
//Tuples
class student {
    constructor(student) {
        this.student = student;
    }
    format() {
        console.log(`${this.student[0]} of Reg number ${this.student[2]} is in ${this.student[1]} level`);
    }
}
const Student1 = new student(["Habib", 200, 34543]);
Student1.format();
