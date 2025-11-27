function solution(myString) {
    let result = ""
    for(const ch of myString) {
        if(ch < "l") result += "l";
        else result += ch
    }
    return result
}