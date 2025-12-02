function solution(n, wires) {
    let result = Infinity;
        
    for(let i = 0; i < wires.length; i++) {
        let graph = Array.from({length: n + 1}, () => []);

         // a, b는 연결된 송전탑
        for(let j = 0; j < wires.length; j++) {
            if(j === i) continue;
            let [a, b] = wires[j]
            graph[a].push(b);
            graph[b].push(a);
        }
        
        let visited = Array(n + 1).fill(false);

        function dfs(node) {
            visited[node] = true;
            let count = 1;
            for(let next of graph[node]) {
                if(!visited[next]) {
                    count += dfs(next);
                }
            }
            return count;
        }
        let sizeA = dfs(1);
        let sizeB = n - sizeA;
        result = Math.min(result, Math.abs(sizeA - sizeB))
    }
    return result;
}