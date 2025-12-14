function solution(num_str) {
    let num = []
    let result = 0;
    num = [...num_str].map(Number)
    for(const n of num) {
        result += n
    }
    return result;
}