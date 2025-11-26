function solution(arr, queries) {
    
    for(let i = 0; i < queries.length; i++) {
        let [s, e] = queries[i];
        for(let idx = s; idx <= e; idx++) {
            arr[idx] += 1
        }

    }
    return arr;
}