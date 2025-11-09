function solution(maps) {
    let start = [0, 0]      // 시작점
    let queue = [[0, 0, 1]] // x, y, 현재까지의 거리
    
    let n = maps.length;    // 행
    let m = maps[0].length; // 열
    
    // 이동 방향
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]

    // 방문 여부
    let visited = Array.from({length: n}, () => Array(m).fill(false));
    visited[0][0] = true;
    
    while(queue.length > 0) {
        const [x, y, dist] = queue.shift()
        
        // 끝까지 도달하면 거리 리턴
        if(x === n - 1 && y === m - 1) return dist;
        
        for(let i = 0; i < 4; i++) {
            // 이동한 다음 좌표
            const nx = x + dx[i]
            const ny = y + dy[i]
            
            // 지도에 안에 있는 좌표인지 1이 맞는지 방문 true인지 확인하고 거리 + 1
            if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx,ny, dist + 1])
            }
        }
    }
    return -1;
}