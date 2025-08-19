function solution(a, b, n) {
    let result = 0
    
    while(n >= a) {
        
       const exc = Math.floor(n / a) * b;
        result += exc;
        n = exc + (n % a);
    }
    return result
}