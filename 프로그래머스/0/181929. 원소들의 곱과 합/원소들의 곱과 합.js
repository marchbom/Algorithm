function solution(num_list) {
    let sum = num_list.reduce((a, b) => a + b, 0);
    let mul = num_list.reduce((a, b) => a * b, 1);
        
    if(sum * sum > mul) {
        return 1
    } else if(sum * sum < mul) {
        return 0;
    }
}