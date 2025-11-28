function solution(park, routes) {
    let x, y;
    // 시작점(S) 찾기
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[i].length; j++) {
            if(park[i][j] === "S") {
                x = i;
                y = j
            }
        }
    }
    // 명령을 수행
    for(const route of routes) {
        // routes를 쪼갠다
        const [way, count] = route.split(" ");
        const dist = Number(count)
        
        // 좌표 생성
        let nx = x;
        let ny = y;
        
        // 갈지 말지
        let ok = true;
        
        // 이동거리만큼 한칸씩 이동하면서 검증
        for(let i = 0; i < dist; i++) {
            if(way === "E") ny++
            if(way === "W") ny--;
            if(way === "S") nx++;
            if(way === "N") nx--;
        
            // 경로가 밖을 벗어나진 않는지 확인하고 벗어나면 명령 무시
            if(nx < 0 || nx >= park.length || ny < 0 || 
               ny >= park[0].length) {
                ok = false;
                break;
            } 
            // 장애물이 있는지 확인하고 있으면 명령 무시
            if(park[nx][ny] === "X") {
                ok = false;
                break;
            }
        }
        // 다 확인해서 ok면 x, y 갱신
         if(ok) {
            x  = nx;
            y = ny;
        }
    }
    return [x, y];
}