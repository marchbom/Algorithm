function solution(num_list) {
    let oddStr = ""
    let evenStr = ""
    
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            evenStr += num_list[i]
        } else {
            oddStr += num_list[i]
        }
    }
    return Number(oddStr) + Number(evenStr);
}