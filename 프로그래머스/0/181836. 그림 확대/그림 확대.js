function solution(picture, k) {
    let result = [];
    for(const row of picture) {
        const expandRow = [...row].map(ch => ch.repeat(k)).join("");
        
        for(let i = 0; i < k; i++) {
            result.push(expandRow);
        }
    }
    return result;
}