const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let m = input[0]

if(m <= 5 && m >= 3) {
    console.log("Spring")
} else if(m >= 6 && m <= 8) {
    console.log("Summer");
} else if (m >= 9 && m <= 11) {
    console.log("Fall")
} else {
    console.log("Winter")
}