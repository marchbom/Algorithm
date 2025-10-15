function solution(my_string) {
    let str = ["a", "e", "i", "o", "u"]
    let result = ""
    
    for(const s of my_string) {
        if(!str.includes(s)) {
            result += s
        }
    }
    return result;
}