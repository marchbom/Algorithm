function solution(myString, pat) {
    let count = 0;
    let len = pat.length;
    for(let i = 0 ; i <= myString.length - len; i++)  {
        if(myString.slice(i, i + len) === pat) {
            count++
        }
    }
    return count;
}