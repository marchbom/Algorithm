const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

function gcd(n, m) {
    return m === 0 ? n : gcd(m, n % m);
}
function lcm(n, m) {
    return (n * m) / gcd(n, m)
}

console.log(lcm(n, m))