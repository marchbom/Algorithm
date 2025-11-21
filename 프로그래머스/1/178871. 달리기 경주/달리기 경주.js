function solution(players, callings) {
    let answer = {};
    
    // answer객체에 선수 이름과 선수 인덱스를 저장(등수)
    players.forEach((name, i) => answer[name] = i)
    
    // 부른 순서를 돌면서 
    for(const call of callings) {
        let idx = answer[call];     // 이름에 맞는 인덱스(등수)
        let prev = players[idx - 1] // 바로 앞 선수
        
        // 위치 바꾸기
        players[idx - 1] = call;    
        players[idx] = prev
        
        // 그리고 등수도 바꿔줌
        answer[call] = idx - 1;
        answer[prev] = idx
    }
    return players;
}