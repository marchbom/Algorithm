function solution(n, words) {
    let setWord = new Set();
    
    for(let i = 0; i < words.length; i++) {
        let currentWord = words[i]
        
        // 나온 단어인지 비교
        if(setWord.has(currentWord)) {
            let person = (i % n) + 1;
            let turn = Math.floor(i /n) + 1;
            return [person, turn]
        }
        
        // 이전 단어 끝과 비교
        if(i >= 1) {
            let prevWord = words[i - 1];
            if(prevWord[prevWord.length - 1] !== currentWord[0]) {
                let person = (i % n) + 1;
                let turn = Math.floor(i /n) + 1;
                return [person, turn]
            }
        }
        setWord.add(currentWord)
    }
   return [0, 0]
}