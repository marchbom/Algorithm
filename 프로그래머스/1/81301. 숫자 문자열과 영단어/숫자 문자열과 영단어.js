function solution(s) {
    let wordMap = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9
    };
    
    let result = []
    let temp = ""
    
    // 정규표현식으로 숫자라면 push하고 아니라면 문자열을 하나씩 더해서 wordMap에 맞는 숫자값을 push하도록
    for(let ch of s) {
        if(/\d/.test(ch)) {
            result.push(ch)
        } else {
            temp += ch;
            if(wordMap[temp] !== undefined) {
                result.push(wordMap[temp]);
                temp = "";
            }
        }
    }
    return Number(result.join(""));
}