function solution(arr, k) {
    let result = []
    for(const num of arr) {
        if(k % 2 !== 0) {
            result.push(num * k);
        } else {
            result.push(num + k);
        }
    }
    return result;
}