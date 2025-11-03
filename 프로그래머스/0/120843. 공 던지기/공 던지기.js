function solution(numbers, k) {
    let result = 0;
    for(let i = 1; i < k; i++) {
        result = (result + 2) % numbers.length;
    }
    return numbers[result];
}