const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);
let cases = input.slice(1).map(Number);

const Quarter = 25;
const Dime = 10;
const Nickel = 5;
const Penny = 1;

let QCount = 0;
let DCount = 0;
let NCount = 0;
let PCount = 0;

for (let i = 0; i < t; i++) {
    QCount = Math.floor(cases[i] / Quarter);
    cases[i] = cases[i] % Quarter;

    DCount = Math.floor(cases[i] / Dime);
    cases[i] = cases[i] % Dime;

    NCount = Math.floor(cases[i] / Nickel);
    cases[i] = cases[i] % Nickel;

    PCount = Math.floor(cases[i] / Penny);

    console.log(QCount, DCount, NCount, PCount)
}
