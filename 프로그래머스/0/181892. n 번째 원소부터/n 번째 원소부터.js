function solution(num_list, n) {
    let answer = [];
    
    answer.push(...num_list.slice(n - 1))
    return answer;
}