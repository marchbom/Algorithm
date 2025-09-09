const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let n = input[0]
    let str = ""
for(let i = 1; i <= n; i++) {
    str = ""
    for(let j = n; j >= i; j--) {
        str+= "* "
    }
    console.log(str)
}
for(let i = 2; i <= n; i++) {
    str = ""
    for(let j = 1; j <= i; j++) {
        str+= "* "
    }
    console.log(str)
}