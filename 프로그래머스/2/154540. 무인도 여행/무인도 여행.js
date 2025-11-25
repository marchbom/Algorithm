function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;
        
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    let visited = Array.from({length : n}, () => Array(m).fill(false));
    let result = []    
    
    function bfs(x, y) {
        let queue = [[x, y]];
        visited[x][y] = true;
        
        let sum = Number(maps[x][y])
        
        while(queue.length > 0) {
            const [qx, qy] = queue.shift();
                        
            for(let i = 0; i < 4; i++) {
                const nx = qx + dx[i];
                const ny = qy + dy[i];
                
                if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                if(visited[nx][ny]) continue;
                if(maps[nx][ny] === "X") continue;
                
                visited[nx][ny] = true;
                sum += Number(maps[nx][ny]);
                queue.push([nx, ny])
            }
        }
        return sum
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(!visited[i][j] && maps[i][j] !== "X") {
                result.push(bfs(i, j))
            }
        }
    }
    return result.length ? result.sort((a, b) => a - b) : [-1]
}