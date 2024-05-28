let id : string; //let variable do not need initialization while const variables do. Wow

id = "o9diid7dju7";

let array: object ;

array = [1,2,3,4,5]

const Name: string = "Bola"

const Names:(any)[] =  ["Akeem","Chinedu",Name]

const Names2:(string|number)[] =  ["Akeem","Chinedu",Name] //setting it globally

Names[1] = 5

Names2[1] = 8

const Names3:[string,string,number,boolean] =  ["Akeem",Name,5,false] //setting specifies number of array elements and types

Names3.push("hi")
Names3[2] = 10

const Dict: {
    Name:string,
    Age : number,
    isCleared : (boolean|undefined)
} = {
    Name:"Habib",
    Age : 19,
    isCleared : true
}

Dict.isCleared = undefined // No errors nice !

//Literal types

let x: "x" = "x";

type colours = "red" | "blue" | "yellow" | "green";

const colourMe = (el:colours) => {
    return el
}

console.log(colourMe("red"))

 // we can also get literal type returns

let getBin : (e:boolean) => 0 | 1

getBin = (bool) => {
    return bool === true? 1 : 0
}

console.log(getBin(true)) // when true : 1

console.log(getBin(false)) // when false : 0
