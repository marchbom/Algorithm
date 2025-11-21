function solution(array, n) {
    let closest = array[0]
    
    for(const num of array) {
        let diff1 = Math.abs(num - n);
        let diff2 = Math.abs(closest - n);
        
        if(diff1 < diff2) {
            closest = num
        } 
        if(diff1 === diff2 && num < closest) {
            closest = num
        }
    }
    return closest;
}