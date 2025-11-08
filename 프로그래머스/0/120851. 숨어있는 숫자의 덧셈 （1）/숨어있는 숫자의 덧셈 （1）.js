function solution(my_string) {
    let result = 0
    
    for(let ch of my_string) {
        if(!isNaN(ch)) {
            result += Number(ch)
        }
    }
    
    return result;
}