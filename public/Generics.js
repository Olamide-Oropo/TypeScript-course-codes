"use strict";
const isLucky = (data) => {
    return `Yes i have dynamically crated a fn that can have different types with the same code | result: ${data}`;
};
console.log(isLucky("wow!"));
console.log(isLucky(6));
const returnResponse = (data) => {
    return data;
};
console.log(returnResponse({
    body: {
        name: "Hafiz"
    },
    id: 3
}));
