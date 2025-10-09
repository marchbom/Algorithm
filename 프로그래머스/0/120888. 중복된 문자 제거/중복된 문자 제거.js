function solution(my_string) {
    let str = [...new Set(my_string.split(""))]

    return str.join("");
}