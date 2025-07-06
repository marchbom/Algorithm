function solution(x) {
    const result = x.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0)
    return x % result === 0 ? true : false;
}