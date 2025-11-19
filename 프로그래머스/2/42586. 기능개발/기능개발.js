function solution(progresses, speeds) {
    var answer = [];
    
    // 첫번째 기능이 완료되기까지 얼마나 걸리는 지
    let complete = Math.ceil((100 - progresses[0]) / speeds[0])
    
    // 배포 기본 1개
    let count = 1;
    
    // 두번째 기능부터 확인
    for(let i = 1; i < progresses.length; i++) {
        // i번째 기능이 완성되기까지 얼마나 걸리는지
        let day = Math.ceil((100 - progresses[i]) / speeds[i])
        
        // 1번째 기능 날짜 안에 포함되면 배포에 추가
        if(day <= complete) {
            count++
            
        // 그렇지 않다면 새로운 배포로
        } else  {
            answer.push(count); // 지금까지 몇개가 포함되는 지 
            complete = day      // 날짜 갱신
            count = 1           // 카운트 다시 1
        }
    }
    answer.push(count)
    return answer;
}