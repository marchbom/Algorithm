function solution(my_string, indices) {
    let answer = ""
    for(let i = 0; i < indices.length; i++) {
       answer = [...my_string].filter((_, idx) => !indices.includes(idx)).join("")
    }
    return answer;
}