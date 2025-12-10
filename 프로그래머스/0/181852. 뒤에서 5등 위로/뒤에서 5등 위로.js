function solution(num_list) {
    let result = []
    num_list.sort((a, b) => a - b)
    result = [...num_list.slice(5)]
    
    return result;
}