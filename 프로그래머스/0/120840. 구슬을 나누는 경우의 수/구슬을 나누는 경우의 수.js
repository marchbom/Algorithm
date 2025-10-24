function fac(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

function solution(balls, share) {
    return Math.round(fac(balls) / (fac(balls - share) * fac(share)))
}

