const fs = require('fs');
let input = fs.readFileSync(0).toString().trim()
let num = Number(input)
if (num < 0 )  {
 console.log(num),
 console.log('minus')
}    