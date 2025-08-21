const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.map(line => {
    console.log(line.split(" ").map((num) => Number(num) * 3).join(" "))
})
