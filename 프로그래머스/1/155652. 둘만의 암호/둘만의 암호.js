function solution(s, skip, index) {
    var answer = '';
    
    for(let ch of s) {
        let changeChar = ch.charCodeAt();
        let count = 0;
        
        while(count < index) {
            changeChar++
            if(changeChar > 122) changeChar = 97;
            if(!skip.includes(String.fromCharCode(changeChar))) count++;
        }
        answer += String.fromCharCode(changeChar)
    }
    return answer;
}