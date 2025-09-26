function solution(s) {
    let first = s[0];
    let sameCount = 0;
    let diffCount = 0;
    
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === first) {
           sameCount++;
         } else {
            diffCount++;
        }
        
        if(sameCount === diffCount) {
            result++;
            first = s[i + 1]
            sameCount = 0;
            diffCount = 0;
        }
    }
    if(sameCount !== 0 || diffCount !== 0) result++;
    
    return result
}