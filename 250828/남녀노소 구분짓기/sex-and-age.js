const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)

if(input[0] === 0) {
    console.log(input[1] >= 19 ? "MAN" : "BOY");
} else {
    console.log(input[1] >= 19 ? "WOMAN" : "GIRL")
}