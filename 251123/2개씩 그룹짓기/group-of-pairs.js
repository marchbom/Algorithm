const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
function solution(n, nums) {
    nums.sort((a, b) => a - b)
    let max = 0;

    for(let i = 0; i < n; i ++) {
        let pair = nums[i] + nums[2 * n - 1 - i];
        max = Math.max(max, pair);
    }
    return max;
}

console.log(solution(n, nums))


