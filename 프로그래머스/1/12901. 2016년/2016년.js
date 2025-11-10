function solution(a, b) {
    let dayMap = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let date = new Date(2016, a - 1, b)

    return dayMap[date.getDay()];
}