const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let n = Number(input[0])

if(n >= 3000) {
    console.log('book');
} else if (n >= 1000) {
    console.log('mask')
} else {
    console.log('no')
}