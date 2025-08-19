function solution(s, n) {
   
    return s.split('').map((ch) => {
        // 공백이 있으면 그대로
        if(ch === " ") return ch;
        
        const code = ch.charCodeAt(0);
        
        // 유니코드 대문자 범위 65~90
        if(code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + n) % 26) + 65);
        }
        
        // 유니코드 소문자 범위 97~122
        if(code >= 97 && code <=122) {
            return String.fromCharCode(((code - 97 + n) % 26) + 97);
            
        }
    }).join("");
}