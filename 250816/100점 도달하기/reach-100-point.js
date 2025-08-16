const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let result = []
    let N = Number(input)

for(let i = N; i <= 100; i++) {
    if(i >= 90) {
        result.push("A")
    } else if(i >= 80) {
        result.push("B")
    } else if(i >= 70) {
        result.push("C")
    } else if(i >= 60) {
        result.push("D")
    } else {
        result.push("F")
    }
}
    console.log(result.join(' '))
