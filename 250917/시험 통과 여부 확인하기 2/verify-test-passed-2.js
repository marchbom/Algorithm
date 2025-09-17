const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n');

let student = Number(input[0])
let passCount = 0;

for(let i = 1; i <= student; i++) {
    let score = input[i].split(" ").map(Number)
    let sum = 0;
    let avg = 0;

    for(let j = 0; j < score.length; j++) {
        sum += score[j]
    }
    avg = sum / score.length;

    if(avg >= 60) {
        console.log("pass")
        passCount++
    } else {
        console.log("fail")
    }
}
    console.log(passCount)
