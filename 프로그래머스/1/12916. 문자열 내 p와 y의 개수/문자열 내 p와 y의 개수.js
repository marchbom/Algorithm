function solution(s){
    let str = s.toLowerCase().split("")
    let pCount = 0;
    let yCount = 0;
    
    for(const ch of str) {
        if(ch === "p") {
            pCount++;
        } else if(ch === "y") {
            yCount++;
        }
    }
    

    return pCount === yCount ? true : false;
}