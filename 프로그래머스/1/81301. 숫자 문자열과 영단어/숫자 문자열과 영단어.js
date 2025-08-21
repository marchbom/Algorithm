function solution(s) {
    let word = ["zero", "one","two","three","four", "five","six","seven","eight", "nine"];
    word.forEach((str, idx) => {
       s = s.replaceAll(str, idx)
    })
    return Number(s)
}
