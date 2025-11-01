function solution(num_list) {
    let answer = 0;
    
    if (num_list.length >= 11) {
        answer = num_list.reduce((a, b) => a + b, 0)
    } else if(num_list.length <= 10) {
        answer = num_list.reduce((a, b) => a * b, 1)
    }
    return answer;
}