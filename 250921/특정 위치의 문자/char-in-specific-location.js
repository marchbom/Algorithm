const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let arr = ['L', 'E', 'B', "R", 'O'];
let idx = arr.indexOf(input)

if(idx !== -1) {
    console.log(idx)
} else {
    console.log("None")
}