function solution(a, b, c, d) {
    let answer = 0;
    let dice = [a, b, c, d];
    let count = {}
    
    
    for(const num of dice) {
        count[num] = (count[num] || 0) + 1
    }
    
    let values = Object.values(count)
    
    // 4개 다 같은 경우
    if(values.includes(4)) {
        let p = Number(Object.keys(count)[0])
        answer = 1111 * p;
    
    // 3개만 같은 경우 3p, 1q
    } else if (values.includes(3)) {
        let p = Number(Object.keys(count).find(k => count[k] === 3))
        let q =  Number(Object.keys(count).find(k => count[k] === 1))
        answer = (10 * p + q) ** 2;
    // 2개씩 같은 경우
    } else if (values.filter(v => v === 2).length === 2) {
        let [p, q] = Object.keys(count).map(Number);
        answer = (p + q) * Math.abs(p - q)
        
    // 2개는 같고 각각 다른 경우
    } else if (values.includes(2)) {
        let qr = Object.keys(count).filter(k => count[k] === 1).map(Number)
        answer = qr[0] * qr[1]
        
    // 다 다른 경우
    } else {
        answer = Math.min(...dice)
    }
    
    return answer;
}