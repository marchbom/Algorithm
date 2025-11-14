function solution(N, stages) {
    let count  = Array(N + 2).fill(0)
    let failed = {};
    let users = stages.length;
    let result = []
    
    // 어디까지 도달 했는지 배열에 저장 (index 0은 해당 없음)
    for(const stage of stages) {
        count[stage] += 1
    }
    
    for(let i = 1; i <= N; i++) {
        // 0번째는 사용 안하므로 패스
        if(count[i] === 0) {
            failed[i] = 0;
            continue;
        } else {
            // 실패율 계산 하면서 유저 차감
            failed[i] = count[i] / users  
            users -= count[i]
        }
    }
    result = Object.entries(failed).sort((a, b) => b[1] - a[1]);
    return result.map(([stage, fail]) => Number(stage));    
}