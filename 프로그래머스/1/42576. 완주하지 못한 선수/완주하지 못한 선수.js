function solution(participant, completion) {
    let result = []
    let arrived = {}
    
    for(const name of completion) {
        arrived[name] = (arrived[name] || 0) + 1 
    }
    
    for(const name of participant) {
        if(!arrived[name]) {
            result.push(name)
        } else {
            arrived[name]--;
        }
    }
    return result.join("");
}