function solution(k, score) {
    let result = [];
    let hall = []
    for(let s of score) {
        hall.push(s);
        hall.sort((a, b) => b - a);
        if(hall.length > k) {
            hall.pop();
        }
        result.push(hall[hall.length - 1])
    }
    return result;
}