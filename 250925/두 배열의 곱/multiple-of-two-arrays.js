const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").filter(line => line.trim() !== "");

let arr1 = input.slice(0, 3).map(line => line.split(" ").map(Number))
let arr2 = input.slice(3, 6).map(line => line.split(" ").map(Number))
let result = [];

for(let i = 0; i < 3; i++) {
    let row = []
    for(let j = 0; j < 3; j++) {
        row.push(arr1[i][j] * arr2[i][j])
    }
    result.push(row.join(" "))
}
    console.log(result.join("\n"))