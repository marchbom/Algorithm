function solution(X, Y) {
    let numX = Array(10).fill(0);
    let numY = Array(10).fill(0);
    let result = ""
    
    // X, Y에서 각 숫자가 몇개 등장하는지
    for(let ch of X) numX[ch]++;
    for(let ch of Y) numY[ch]++;
    
    // 9부터 내려가면서 공통으로 만들 수 있는 큰 수부터 채움
    for(let i = 9; i >= 0; i--) {
        // X, Y 둘다 가지고 있는 숫자의 최소 개수만큼 사용
        let count = Math.min(numX[i], numY[i]);
        
        // 숫자 i를 count만큼 반복하고 결과 문자열에 누적
        result += String(i).repeat(count)
    }
    
    // 공통 없으면 -1
    if(result === "") return "-1";
    // 0으로 시작하면 그냥 0
    if(result[0] === "0") return "0";
    return result;
}