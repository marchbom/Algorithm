function solution(numbers, direction) {
    var answer = [];
    if (direction === "right") {
        answer = [...numbers.slice(-1), ...numbers.slice(0, numbers.length - 1)];
    } else if (direction === "left") {
        answer = [...numbers.slice(1), numbers[0]]
    }
    return answer;
}