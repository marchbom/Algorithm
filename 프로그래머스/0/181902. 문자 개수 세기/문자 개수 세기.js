function solution(my_string) {
    let count = {}
    for(let i= 0; i < 26; i++) {
        count[String.fromCharCode(65 + i)] = 0;
    }
    
    for(let i = 0; i < 26; i++) {
        count[String.fromCharCode(97 + i)] = 0
    }
    for(const ch of my_string) {
        if(count.hasOwnProperty(ch)) {
            count[ch] += 1
        }
    }
    
    return Object.values(count);
}