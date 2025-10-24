function solution(num_list) {
    let lastIdx = num_list[num_list.length - 1]
    let prevIdx = num_list[num_list.length - 2]
    if(lastIdx > prevIdx) {
        num_list.push(lastIdx - prevIdx)
    } else {
        num_list.push(lastIdx * 2)
    }
    return num_list;
}