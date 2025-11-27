const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');
    
    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

// Please Write your code here.
class Agent {
    constructor(codename, score) {
        this.codename = codename;
        this.score = score
    }
}

const people = [];

for (let i = 0; i < codenames.length; i++) {
    people.push(new Agent(codenames[i], scores[i]));
}

let minPerson = people[0];

for (const p of people) {
    if (p.score < minPerson.score) {
        minPerson = p;
    }
}

console.log(minPerson.codename, minPerson.score);