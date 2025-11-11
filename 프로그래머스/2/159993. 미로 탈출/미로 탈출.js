function solution(maps) {   
    let s, l, e; // 시작, 레버, 출구
    let n = maps.length;
    let m = maps[0].length;
    
    // 이동
    let dx = [1, -1, 0, 0]
    let dy = [0, 0, 1, -1]
    

    // 각 지점을 찾기 위한 
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maps[i][j] === "S") s = [i,j];
            if(maps[i][j] === "L") l = [i, j];
            if(maps[i][j] === "E") e = [i, j];
        }
    }
    
    function bfs(start, target) {
        let queue = [[...start, 0]]
        let visited = Array.from({length: n}, () => Array(m).fill(false));
        visited[start[0]][start[1]] = true;
        
        while(queue.length > 0) {
            const [x, y, dist] = queue.shift();
            
            if(maps[x][y] === target) return dist;
            for(let i = 0; i < 4; i++) {
                const nx = x + dx[i]
                const ny = y + dy[i]
                
                if(nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] !== "X" && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, dist + 1])
                }
            }
        }
        return -1;
    }
    // 출발부터 레버까지
    const toLever = bfs(s, "L");
    // 레버부터 출구까지
    const toExit = bfs(l, "E");
    
    if(toLever === -1 || toExit === -1) return -1;
    return toLever + toExit;
}