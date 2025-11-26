function solution(tickets) {
    let graph = {};
    
    let used = Array(tickets.length).fill(false);
    let result;
    
    // tickets 배열로 출발 공항 기준 그래프 생성
    for(let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i];
        if(!graph[from]) graph[from] = [];  // graph from의 value를 배열로 초기화
        graph[from].push(i);                // from 위치에 해당하는 ticket index를 추가
    }
    
    // 가능한 경로가 2개 이상이면 알파벳 순서가 우선인 것으로 해야하기 때문에 문자열 오름차순 정렬
    for(let from in graph) {
        graph[from].sort((a, b) => tickets[a][1].localeCompare(tickets[b][1]));
    }
    
    // cur => 현재 공항
    // path => 지금까지 지나온 경로
    function dfs(cur, path) {
        // 티겟 개수 + 1이 지나온 경로가 되기 때문에 모든 경로를 지나왔다면 true 처리하고 종료
        if(path.length === tickets.length + 1) {
            result = path;
            return true;
        }
        // 현재 공항에서 출발하는 티겟이 없으면 종료
        if(!graph[cur]) return false;
        
        // cur에서 출발할 수 있는 티켓 번호 목록
        for(let ticketIdx of graph[cur]) {
            
            // 아직 사용하지 않았으면 true
            if(!used[ticketIdx]) {
                used[ticketIdx] = true;
                
                // 다음 공항 이동
                let next = tickets[ticketIdx][1];
                if(dfs(next, [...path, next])) return true;
                
                // 실패하면 되돌려놓기
                used[ticketIdx] = false
            }
        }
        return false;
    }
    // 시작 지점과 시작 되는 경로를 배열로 넣어 호출
    dfs("ICN", ["ICN"])
   
    return result;
}