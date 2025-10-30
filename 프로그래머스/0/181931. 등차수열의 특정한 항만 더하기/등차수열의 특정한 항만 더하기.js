function solution(a, d, included) {
    let sum = 0;
    let n = included.length
    for(let i = 0; i < n; i++) {
        const term = a + d * i;
        if(included[i]) {
            sum += term
        }
    }
    return sum;
}