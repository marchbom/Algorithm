function solution(array, commands) {
    let result = [];
    for(let i = 0; i < commands.length; i++) {
        let start = commands[i][0] - 1
        let end = commands[i][1]
        let k = commands[i][2]
        result.push(array.slice(start, end).sort((a, b)=> a-b)[k-1])
    }
    return result;
}
                    



