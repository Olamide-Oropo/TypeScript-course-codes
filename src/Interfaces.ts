interface instance{
    id:string|number;
    type:string;
    editType(newType:string):string
}

class Type{
    constructor(
        readonly instance:instance
    ){}
    printType(){
        console.log(this.instance.type)
    }
}


const instance1:instance = {
    id:"kie83k",
    type:"Book",
    editType(newType) {
        this.type = newType;
        return newType
    },
}

instance1.editType("Food")

console.log(instance1.type)

const Type1 = new Type(instance1);

Type1.printType()