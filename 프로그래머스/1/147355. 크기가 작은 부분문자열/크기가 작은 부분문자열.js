function solution(t, p) {
    let P = BigInt(p)
    let len = p.length;
    let count = 0;
    
    for(let i =0; i <= t.length - len; i++) {
        const sub = t.slice(i, i + len);
        if(sub <= P) count++;
    }
    return count;
}