"use strict";
let Greet = (name) => {
    return `Hello ${name.toUpperCase()} nice to me you`;
};
const Data = (data) => {
    return {
        id: data.id,
        Name: data.Name,
        Age: data.Age,
        school: data.school
    };
};
const fill = {
    id: 1234,
    Name: "Oropo Habib",
    Age: 19,
};
console.log(Data(fill));
let calcAmount;
calcAmount = (Income, isCertified) => {
    return isCertified ? Income * 5 : "Sorry you are not eligible";
};
console.log(calcAmount(2000, true));
console.log(calcAmount(6000, false));
let sortData; //function types are a step up!
sortData = ({ name, uid, regNo, school, isString }) => {
    return isString ? `${name} with Reg number "${regNo}" attends ${school}` : {
        name,
        uid,
        regNo,
        school
    };
};
console.log(sortData({ name: "Olamide", uid: 987654, regNo: 87246, school: "University of my dreams", isString: false }), "  Returns Object");
console.log(sortData({ name: "Olamide", uid: 987654, regNo: 87246, school: "University of my dreams", isString: true }), "  Returns String");
