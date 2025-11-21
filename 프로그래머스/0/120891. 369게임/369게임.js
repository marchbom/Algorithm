function solution(order) {
    let count = 0;
    let str = String(order).split("")
    
    for(const s of str) {
        if(s === "3" || s === "6" || s === "9") {
            count++
        }
    }
    return count;
}