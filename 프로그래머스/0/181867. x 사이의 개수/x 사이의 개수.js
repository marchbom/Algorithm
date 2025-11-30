function solution(myString) {
    let answer = [];
    let count = []
    answer = myString.split("x");
    for(let i = 0; i < answer.length; i++) {
        count.push(answer[i].length);
    } 
    return count;
}