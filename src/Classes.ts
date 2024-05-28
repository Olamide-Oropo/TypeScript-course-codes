class getNum{
    a:number;
    b:number;
    c:number;

    constructor(a:number,b:number,c:number){
        this.a = a;
        this.b = b;
        this.c = c
    }
    static Docs() {
        console.log("You have three guesses to guess the number 7")
    }
    viewResult():string|null {
        const guesses = [this.a,this.b,this.c]
        let correct_guess:string | null = ""
        guesses.forEach((guess,index)=> {
            guess === 7 ? correct_guess = "you guessed right":index === 2? "sorry try again":null;
        })
        return correct_guess
    }
}


getNum.Docs()

const firstTry = new getNum(3,8,9);

console.log(firstTry.a,firstTry.c)

console.log(firstTry.viewResult()," first")

const secondTry = new getNum(1,7,8);

console.log(secondTry.viewResult(),"second")

class printValue{
    constructor(
        readonly value:string,
        readonly date?:string
    ){}
    static printDefault():string{
        return "This is the default return"
    }
    print(){
        console.log(this.value,this.date)
    }
}

const logName = new printValue("Habib")

logName.print()

const logName2 = new printValue("Hafiz","02-04-07")

logName2.print()