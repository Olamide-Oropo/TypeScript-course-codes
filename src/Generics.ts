const isLucky = <T>(data:T):string => {
    return `Yes i have dynamically crated a fn that can have different types with the same code | result: ${data}`
}

console.log(isLucky<string>("wow!"))

console.log(isLucky<number>(6))