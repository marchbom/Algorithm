const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let num = Number(input[0]);
let more = 80 - num


if(num >= 80) {
console.log('pass')
} else {
    console.log(`${more} more score`)
}
