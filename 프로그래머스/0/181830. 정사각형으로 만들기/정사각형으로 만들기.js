function solution(arr) {
    let row = arr.length;
    let col = arr[0].length
    let max  = Math.max(row, col)
    
    // 열이 부족하다면 뒤에 0 추가
    for(let i = 0; i < row; i++) {
       while(arr[i].length < max) {
           arr[i].push(0);
       }
    }
    // 행이 부족하다면 행 추가
    while(arr.length < max) {
        arr.push(Array(max).fill(0))
    }
    
    return arr;
}