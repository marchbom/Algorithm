function solution(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(...Array(arr[i]).fill(arr[i]))
    }
    return result;
}