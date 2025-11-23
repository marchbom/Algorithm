function solution(arr, intervals) {
    let answer = [];
    for(let i = 0; i < intervals.length; i++) {
        let [a, b] = intervals[i]
        let slices = arr.slice(a, b + 1);
        answer.push(...slices)
    }
    return answer;
}