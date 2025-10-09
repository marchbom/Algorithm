function solution(n) {
    let count = 0;
    let pair = []
    for(let i = 1; i <= n; i++) {
       if(n % i === 0) {
           pair.push(Math.floor(n / i), i)
           count++
       }
    }
    return count;
}