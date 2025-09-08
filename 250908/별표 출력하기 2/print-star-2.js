const fs = require('fs');
const input = Number(fs.readFileSync(0).toString().trim().split("\n"));


for(let i = 1; i <= input; i++) {
    let str = ""
    for(let j = input; j >= i; j--) {
        str += "* "
    }
    console.log(str)
}