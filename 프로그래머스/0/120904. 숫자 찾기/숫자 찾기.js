function solution(num, k) {
    let numArr = String(num).split("").map((n) => Number(n));
    for(const num of numArr) {
        if(num === k) {
            return numArr.indexOf(num) + 1;
        } 
    } 
    return -1;
}