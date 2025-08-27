function solution(babbling) {
    let speak = ["aya", "ye", "woo", "ma"]
     let count = 0;
    
    for(let word of babbling) {
        if(speak.some(sp => word.includes(sp.repeat(2)))) continue;
        
        for(const sp of speak) {
            word = word.replaceAll(sp, " ")
        }
        
        if (word.trim().length === 0) count++;
    }
    return count;
}

    
