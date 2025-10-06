const fs = require('fs')
const strList = fs.readFileSync(0).toString().trim().split("\n")

const [str1, str2, str3] = strList

let maxStr = Math.max(str1.length, str2.length, str3.length);
let minStr = Math.min(str1.length, str2.length, str3.length);

console.log(maxStr - minStr)

