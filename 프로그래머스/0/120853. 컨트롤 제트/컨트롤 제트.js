function solution(s) {
    let stack = [];
    let change = s.split(" ");
    
    for(const ch of change) {
        if(ch === "Z") {
            stack.pop();
        } else {
            stack.push(Number(ch));
        }
    }
    
    return stack.reduce((a, b) => a + b, 0)
}