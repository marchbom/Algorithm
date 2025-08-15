const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let a = input[0]
let b = input[1]

if(a.length > b.length) {
    console.log(`Coding ${a.length}`)
} else if(a.length < b.length) {
    console.log(`Coding ${b.length}`)
} else {
    console.log("same")
}
