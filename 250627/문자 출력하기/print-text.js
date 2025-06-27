const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let num = input[0];

for(let i = 0; i < 8; i++) {
    process.stdout.write(num);

}