const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")

let [n, q] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = []

for(let i = 2; i < q + 2; i++) {
    let parts = input[i].split(" ").map(Number);
    let type = parts[0]

    if(type === 1) {
        let a = parts[1]
        result.push(arr[a - 1])
    } else if(type === 2) {
        let b = parts[1]
        let idx = arr.indexOf(b)
        result.push(idx === -1 ? 0 : idx + 1)
    } else if(type === 3) {
        let s = parts[1]
        let e = parts[2]
        result.push(arr.slice(s-1, e).join(" "))
    }
}
        console.log(result.join("\n"))
