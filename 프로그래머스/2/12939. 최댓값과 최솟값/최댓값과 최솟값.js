function solution(s) {
    let str = s.split(" ").map(Number);
    let result = []
    let min = result.push(Math.min(...str))
    let max = result.push(Math.max(...str))

    
    
    return result.join(" ")
}