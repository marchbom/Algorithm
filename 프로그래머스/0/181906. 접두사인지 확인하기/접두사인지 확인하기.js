function solution(my_string, is_prefix) {
    var answer = 0;
    
    if(my_string.includes(is_prefix) && my_string.indexOf(is_prefix) === 0) {
        return 1
    } else 0
    return answer;
}