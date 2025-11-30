function solution(binomial) {
    let [a, op, b] = binomial.split(" ")
    let result = 0;
    
    if(op === "+") result = Number(a) + Number(b);
    else if(op === "-") result = Number(a) - Number(b);
    else if(op === "*") result = Number(a) * Number(b);
 
    return result;
}