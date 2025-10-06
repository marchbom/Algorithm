const fs = require('fs')
const str = fs.readFileSync(0).toString().trim().split(" ");


if(str[0].length > str[1].length) {
    console.log(`${str[0]} ${str[0].length}`)
} else if (str[0].length < str[1].length) {
    console.log(`${str[1]} ${str[1].length}`)
} else {
    console.log("same")
}
