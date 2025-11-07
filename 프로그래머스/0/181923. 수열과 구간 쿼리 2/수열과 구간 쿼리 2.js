function solution(arr, queries) {
    var answer = [];
    for(let [s, e, k] of queries) {
        let newArr = arr.slice(s, e + 1);
        let bigger = newArr.filter(x => x > k)
        if(bigger.length > 0) {
            answer.push(Math.min(...bigger))
        } else {
            answer.push(-1)
        }
    }
    return answer;
}