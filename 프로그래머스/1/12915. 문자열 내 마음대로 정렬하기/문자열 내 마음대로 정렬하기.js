function solution(strings, n) {
    var answer = [];
    for(let i = 0; i < strings.length; i++) {
        answer = strings.sort((a, b) => {
            if(a[n] === b[n]) {
                return a.localeCompare(b)
            } 
            return a[n].localeCompare(b[n]);
        })
    }
    return answer;
}