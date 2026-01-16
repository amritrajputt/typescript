function greet(name: string) {
    console.log(`hello ${name}`)
}

greet("amrit")

// any is used for any datatype whether it is int, bool,str
let a: any = 1
a = true
a = "amrit"

// '|' string or number allowed
let price: string | Number = "amrit"
price = 1234
console.log(price)

function sum(a: number, b: number) {
    return a + b
}
console.log(sum(12, 12))


function first(fn: (a: string) => void) {
    setTimeout(() => fn("amrit"), 1000);
}

first(function greet(name: string) {
    console.log("hello from inner function" + ` ${name}`);
})

