function solution(arr, n) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(arr.length % 2 !== 0) {
            result.push(i % 2 === 0 ? arr[i] + n : arr[i])
        } else {
            result.push(i % 2 !== 0 ? arr[i] + n : arr[i])
        }
    }
    return result;
}