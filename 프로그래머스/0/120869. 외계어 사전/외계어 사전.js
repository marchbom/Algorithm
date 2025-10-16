function solution(spell, dic) {

    for(let i = 0; i < dic.length; i++) {
        let include = true;
        
        for(const s of spell) {
            if(!dic[i].includes(s)) {
                include = false;
                break;
            } 
        }
        if(include && dic[i].length === spell.length) {
                return 1;
        }
    }
    return 2
}