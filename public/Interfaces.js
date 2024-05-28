"use strict";
class Type {
    constructor(instance) {
        this.instance = instance;
    }
    printType() {
        console.log(this.instance.type);
    }
}
const instance1 = {
    id: "kie83k",
    type: "Book",
    editType(newType) {
        this.type = newType;
        return newType;
    },
};
instance1.editType("Food");
console.log(instance1.type);
const Type1 = new Type(instance1);
Type1.printType();
