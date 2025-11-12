const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function solution(str) {
  if (str.length === 0) return 0; 
  
  // 첫번째 숫자
  let first = Number(str[0]);
  
  // 나머지 숫자
  let rest = str.slice(1);

  // 첫 번째 자리 제곱 + 나머지는 넘겨서 다시 
  return Math.pow(first, 2) + solution(rest);
}

console.log(solution(input));