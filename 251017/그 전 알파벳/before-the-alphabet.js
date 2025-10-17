const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = input;

str = str.charCodeAt(0)
let prevStr = str - 1;
if(prevStr < 97) {
    prevStr = 122
}
console.log(String.fromCharCode(prevStr))