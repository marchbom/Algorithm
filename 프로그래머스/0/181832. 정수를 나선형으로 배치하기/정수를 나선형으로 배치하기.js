function solution(n) {
    let result = Array.from({length : n}, () => Array(n).fill(0));
    
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];
    
    let x = 0;
    let y = 0;
    let dir = 0;
    
    let num = 1;
    
    while(num <= n * n) {
        result[x][y] = num;
        
        const nx = x + dx[dir];
        const ny = y + dy[dir];
        
        if(nx >= 0 && nx < n && ny >= 0 && ny < n && result[nx][ny] === 0) {
            x = nx;
            y = ny;
        } else {
            dir = (dir + 1) % 4;
            x += dx[dir];
            y += dy[dir]
        }
        num++;
    }
    return result;
    }