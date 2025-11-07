const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function print1(n) {
    if(n === 0) return;
    print1(n - 1);
    process.stdout.write(n + " ")
}
function print2(n) {
    if(n === 0) return;
    process.stdout.write(n + " ")
    print2(n - 1);
}

print1(n)
console.log()
print2(n)