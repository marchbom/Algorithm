function solution(s) {
    var answer = {};
    let result = []
    s = s.split("")
    
    for(const ch of s) {
        answer[ch] = (answer[ch] || 0) + 1
    }
    for(const [key, value] of Object.entries(answer)) {
        if(value === 1) result.push(key)
    }
    return result.sort().join("");
}