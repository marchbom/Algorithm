const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(s => s.trim()).filter(Boolean); 


const arr1 = input.slice(0, 3).map(line => line.split(/\s+/).map(Number));
const arr2 = input.slice(3, 6).map(line => line.split(/\s+/).map(Number));
const resultArr = []

for(let i = 0; i < arr1.length; i++) {
    resultArr[i] = [];
    for(let j= 0; j < arr2.length; j++) {
        resultArr[i][j] = arr1[i][j] * arr2[i][j]
    }
}

resultArr.forEach(row => console.log(row.join(" ")))
