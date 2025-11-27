function solution(N, road, K) {
    // 그래프 만들기
    // 마을 번호가 1~ N까지 이므로 0은 안쓰고 N + 1로 만듦
    let graph = Array.from({length: N + 1}, () => []);
    
    // a, b는 마을, time = 걸리는 시간
    for(let [a, b, time] of road) {
        graph[a].push([b, time]);
        graph[b].push([a, time]);
    }
    
    // 1번에서 각 마을까지의 최소 배달 시간을 저장할 배열
    // 1번빼고는 무한대로 채워둔다
    let distance = Array(N + 1).fill(Infinity);
    distance[1] = 0;
    
    // [현재 마을번호, 지금까지 걸린 시간] 을 배열 형태로 저장
    // 처음은 1번 마을로 시작
    let queue = [[1, 0]];
    
    while(queue.length) {
        // queue에서 하나를 꺼냄
        let [now, dist] = queue.shift(); 
        
        // 이미 더 짧은 기록이 있으면 무시
        if(dist > distance[now]) continue;
        
        // 현재 마을에서 갈 수 있는 마을 순회
        for(let [next, time] of graph[now]) {
            
            // 지금 경로로 next까지 가는 새로운 시간
            let newDist = dist + time;
            
            // 새로운 경로가 기존보다 빠르면 갱신
            if(newDist < distance[next]) {
                distance[next] = newDist;
                queue.push([next, newDist])
            }
        }
    }
    // distance 배열에서 distance[0] 제외 / K이하인 마을만 골라내기
    return distance.slice(1).filter(d => d <= K).length;
}