function solution(arr) {
    var answer = [];
    let first2 = arr.indexOf(2);
    let last2 = arr.lastIndexOf(2)
    
    if(first2 === -1) return [-1];
    return arr.slice(first2, last2 + 1)
}