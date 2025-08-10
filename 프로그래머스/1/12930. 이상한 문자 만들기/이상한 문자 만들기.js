function solution(s) {
    let str = s.split(''); 
    let count = 0; 

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') { 
            count = 0;
            continue;
        }

        if (count % 2 === 0) {
            str[i] = str[i].toUpperCase();
        } else {
            str[i] = str[i].toLowerCase();
        }
        count++;
    }

    return str.join('');
}