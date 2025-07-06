function solution(s) {
    let len = s.length;
    let midStr = Math.floor(len / 2)

    return len % 2 === 0 
    ? s.slice(midStr - 1, midStr + 1)
    : s[midStr];
}