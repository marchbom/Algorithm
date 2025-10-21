function solution(array) {
    let count = {};
    
    for(let n of array) {
        count[n] = (count[n] || 0) + 1;
    }
    
    let maxCount = Math.max(...Object.values(count));
    let filter = Object.keys(count).filter(key => count[key] === maxCount).map(Number)
    
    
    return filter.length > 1 ? -1 : filter[0];
}