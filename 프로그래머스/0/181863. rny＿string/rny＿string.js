function solution(rny_string) {
    let result = '';
    for(let ch of rny_string) {
        if(ch === "m") result += "rn";
        else result += ch
    }
    return result;
}