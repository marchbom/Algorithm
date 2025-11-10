function solution(n,a,b) {
    let currentRound = 0;

    while(a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        currentRound++
    }
    return currentRound;
}