function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++) {
        let [a, b] = queries[i];
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}
