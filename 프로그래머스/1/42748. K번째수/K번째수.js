function solution(array, commands) {
    let result = []
    
    for(let a = 0; a < commands.length; a++) {
        let [i, j, k] = commands[a]
        let slices = array.slice(i - 1, j).sort((a, b) => a - b)
        result.push(slices[k - 1])
    }
    return result;
}