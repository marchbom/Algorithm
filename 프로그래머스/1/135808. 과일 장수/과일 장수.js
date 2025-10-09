function solution(k, m, score) {
    let count = 0;
    score.sort((a, b) => b - a);
    
    for(let i = 0; i + m <= score.length; i += m) {
        const box = score.slice(i, i + m);
        const min = box[m - 1]
        count += min * m
    }
    return count;
}