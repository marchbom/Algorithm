function solution(my_string, is_suffix) {
    var answer = 0;
    if(my_string.endsWith(is_suffix)) {
        return 1
    }
    return 0;
}