const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let arr1 = input[0].split(" ").map(Number)
let arr2 = input[1].split(" ").map(Number)

let rowAvg1 = (arr1.reduce((a, b) => a + b, 0) / arr1.length).toFixed(1)
let rowAvg2 = (arr2.reduce((a, b) => a + b, 0) / arr1.length).toFixed(1)
console.log(rowAvg1, rowAvg2)
let colAvg = []
for(let j = 0; j < arr1.length; j++) {
    colAvg.push(((arr1[j] + arr2[j]) / 2).toFixed(1))
}
console.log(colAvg.join(" "))

let totalSum = arr1.reduce((a, b) => a + b , 0) + arr2.reduce((a, b) => a + b, 0)
let totalAvg = (totalSum / (arr1.length + arr2.length)).toFixed(1)
console.log(totalAvg)