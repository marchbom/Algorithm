const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let line of input) {
  const [w, h, ch] = line.split(" ");
  const width = Number(w);
  const height = Number(h);

  console.log(width * height);
if(ch === "C") break;
}

