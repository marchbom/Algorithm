function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++) {
        let str = String(i)
        if([...str].every(ch => ch === "5" || ch === "0")) {
            answer.push(Number(str))
        }
    }
    return answer.length > 0 ? answer : [-1];
}