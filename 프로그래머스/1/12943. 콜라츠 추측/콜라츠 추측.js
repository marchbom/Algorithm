function solution(num) {
    let repeat = 0;
    while (num !== 1) {
        if(repeat >= 500) return -1;
        if(num % 2 === 0 ) {
            num = num / 2
            repeat++
        } else if (num % 2 !== 0) {
            num = num * 3 + 1
            repeat++
            
        }
    }
    return repeat;
}