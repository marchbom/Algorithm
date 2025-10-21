function solution(before, after) {
    let sortBe = before.split("").sort().join("")
    let sortAf = after.split("").sort().join("")
    if(sortBe === sortAf) return 1;
    else return 0
}