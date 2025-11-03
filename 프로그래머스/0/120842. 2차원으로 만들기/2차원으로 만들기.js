function solution(num_list, n) {
    let len = num_list.length / n
    
    let arr = Array.from({length : len}, (_, i) => num_list.slice(i * n, (i + 1) * n));
    return arr;
}