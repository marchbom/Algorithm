function solution(myString) {
    let result = "";
    for(let ch of myString) {
        // a이면 대문자 A로
        if(ch === "a") {
            result += "A";
            
        // 대문자면 소문자로
        } else if (ch > "A" && ch <= "Z") {
            result += ch.toLowerCase();
            
        // 나머지는 그대로
        } else {
            result += ch;
        }
    }
    return result;
}