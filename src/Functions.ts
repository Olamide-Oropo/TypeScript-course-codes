let Greet = (name: string) => {
    return `Hello ${name.toUpperCase()} nice to me you`
}

type el = { //types are so useful damn
    id: (string|number),
    Name: string,
    Age : number,
    school? : string
}

const Data = (data:el) => {
    return {
        id:data.id,
        Name:data.Name,
        Age:data.Age,
        school:data.school
    }
}
const fill = {
    id:1234,
    Name: "Oropo Habib",
    Age: 19,
}
console.log(Data(fill))

let calcAmount: (a:number,b:boolean) => number|string;

calcAmount = (Income,isCertified) => {
    return isCertified? Income*5:"Sorry you are not eligible"
}

console.log(calcAmount(2000,true));

console.log(calcAmount(6000,false));

type schData = {
    name:string,
    uid:number,
    regNo:number,
    school:string,
    isString:boolean
}

let sortData : (info:schData) => object|string //function types are a step up!

sortData = ({name,uid,regNo,school,isString}) => {
    return isString? `${name} with Reg number "${regNo}" attends ${school}`:{
        name,
        uid,
        regNo,
        school
    }
}

console.log(sortData({name:"Olamide",uid:987654,regNo:87246,school:"University of my dreams",isString:false}),"  Returns Object")

console.log(sortData({name:"Olamide",uid:987654,regNo:87246,school:"University of my dreams",isString:true}),"  Returns String")


