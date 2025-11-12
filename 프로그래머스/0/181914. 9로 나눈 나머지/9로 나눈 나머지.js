function solution(number) {
    let answer = 0;
    for(const num of number) {
        answer += Number(num);
    }
    return answer % 9;
}