function solution(a, b) {
    
    let num1 = Number((String(a) + String(b)))
    let num2 = Number((String(b) + String(a)))
    return Math.max(num1, num2);
}