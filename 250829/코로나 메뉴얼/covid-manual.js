const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let cntA = 0;

for (let i = 0; i < input.length; i++) {
    let [symptom, tempStr] = input[i].split(" ");
    let temp = Number(tempStr);

    if (symptom === 'Y' && temp >= 37) {
        cntA++;
    }
}

if (cntA >= 2) {
  console.log("E");
} else {
  console.log("N");
}