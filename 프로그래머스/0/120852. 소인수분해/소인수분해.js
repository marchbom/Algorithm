function solution(n) {
    var answer = [];

    let num = n;
    let i = 2;
    while(i * i <= num) {
        while(num % i === 0) {
            if(!answer.includes(i)) answer.push(i);
            num /= i
        }
        i++;
    }
    if(num > 1) answer.push(num)
    return answer.sort((a, b) => a - b)
}