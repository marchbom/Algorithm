function solution(name, yearning, photo) {
    let scoreMap = {};
    
    for(let i =0; i < name.length; i++) {
        scoreMap[name[i]] =yearning[i];
    }
    let answer = [];
    
    for(let i = 0; i < photo.length; i++) {
        let sum = 0;
        for(let j = 0; j <photo[i].length; j++) {
            let person = photo[i][j];
            
            if(scoreMap[person]) {
                sum += scoreMap[person]
            }
        }
        answer.push(sum)
    }
    return answer;
}