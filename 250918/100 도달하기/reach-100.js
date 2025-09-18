const fs = require('fs')
const n = Number(fs.readFileSync(0).toString().trim())

let arr = [1, n]


for(let i = 2; ; i++) {
    let next = arr[i - 2] + arr[i - 1]
    arr.push(next)
    if(next >= 100) break;

}
console.log(arr.join(" "))