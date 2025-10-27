function solution(str1, str2) {
    var answer = [];
    for(let i = 0; i <= str1.length; i++) {
        if(i < str1.length) {
            answer.push(str1[i])
        } 
        if(i < str2.length) {
            answer.push(str2[i])
        }
    }
    return answer.join("");
}