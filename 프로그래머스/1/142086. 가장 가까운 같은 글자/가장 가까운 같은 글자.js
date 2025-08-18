function solution(s) {
    let answer = [];
    let last = new Map();
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(last.has(char)) answer.push(i - last.get(char));
        else answer.push(-1);
        last.set(char, i);
    }
    return answer;
}