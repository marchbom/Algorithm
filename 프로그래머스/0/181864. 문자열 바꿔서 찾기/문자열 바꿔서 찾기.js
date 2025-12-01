function solution(myString, pat) {
    let result = ""
    for(let ch of myString) {
        if(ch === "A") result += "B" 
        else if(ch === "B") result += "A"
        else result += ch
    }
    return result.includes(pat) ? 1 : 0
}