const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return Math.floor(a / b)
}

let result = 0
if(o === "+") {
    result = plus(a, c)
    console.log(`${a} ${o} ${c}`+ " = " + result)
} else if (o === "-") {
    result = minus(a, c)
    console.log(`${a} ${o} ${c}`+ " = " + result)
} else if(o === "*") {
    result = multiply(a, c)
    console.log(`${a} ${o} ${c}`+ " = " + result)
} else if (o=== "/") {
    result = divide(a, c)
    console.log(`${a} ${o} ${c}`+ " = " + result)
} else {
    console.log("False")
}

