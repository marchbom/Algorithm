const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


let N = Number(input[0])

if(N % 2 !== 0 && N % 3 === 0 ) {
    console.log("true")
} else if(N % 2 === 0 && N % 5=== 0 ) {
    console.log("true")
} else {
    console.log("false")
}
