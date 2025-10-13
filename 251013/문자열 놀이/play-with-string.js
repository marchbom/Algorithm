const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [s, q] = input[0].split(' ');
q = Number(q);
let str = s.split('');

for (let i = 1; i <= q; i++) {
  const [type, char1, char2] = input[i].split(' ');

  if (type === '1') {
    const a = Number(char1) - 1;
    const b = Number(char2) - 1;
    [str[a], str[b]] = [str[b], str[a]];
  } else if (type === '2') {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === char1) str[j] = char2;
    }
  }
  console.log(str.join(''));
}