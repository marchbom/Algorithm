function solution(nums) {
    let value = {};
    for(const num of nums) {
        value[num] = (value[num] || 0) + 1;
    }
    let count = Object.keys(value).length;
    let getPon = nums.length / 2
    
    return Math.min(count, getPon)
}

