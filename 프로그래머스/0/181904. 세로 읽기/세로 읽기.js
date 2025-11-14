function solution(my_string, m, c) {
    var answer = []
    for(let i = 0; i < my_string.length; i += m) {
       answer.push(my_string.slice(i, i + m));
    }
    return answer.map(row  => row[c - 1]).join("");
}