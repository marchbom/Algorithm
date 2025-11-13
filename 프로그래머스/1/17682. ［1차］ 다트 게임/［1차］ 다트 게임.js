function solution(dartResult) {
    let scores = []; // 점수 저장할 배열
    let num = ""     // 점수를 문자열로 누적
    let dart = dartResult.split("") // 쪼갬
    
    for(let ch of dart) {
        // 두자리수 일 수 있어서 num에 이어 붙임
        if(!isNaN(ch)) {
            num += ch;
            
        } else if(ch === "S" || ch === "D" || ch === "T") {
            let score = Number(num);
            num = "";
            
            if(ch === "S") score = score ** 1;
            if(ch === "D") score = score ** 2;
            if(ch === "T") score = score ** 3;
            scores.push(score)
            
        } else if(ch === "*" || ch === "#") {
            let idx = scores.length -1; // 마지막 점수의 인덱스
            
            // * 이전, 현재 점수 2배
            if(ch=== "*") {
                scores[idx] *= 2
                if(idx > 0) scores[idx -1] *= 2
            }
            // #은 현재 점수 -1배
            if(ch === "#") scores[scores.length -1] *= -1;
        }
    }
    return scores.reduce((a, b) => a + b, 0);
}