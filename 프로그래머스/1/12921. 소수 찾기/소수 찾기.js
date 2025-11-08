function solution(n) {
    let primeList = Array(n + 1).fill(true);
    primeList[0] = false;
    primeList[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if(primeList[i]) {
            for(let j = i * i; j <= n; j += i) {
                primeList[j] = false;
            }
        }
    }
    return primeList.filter(Boolean).length;
}