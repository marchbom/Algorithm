function solution(keymap, targets) {
    let result = [];
    for(const target of targets) {
        let count = 0;
        for(const ch of target) {
            let press = Infinity;
            for(const key of keymap) {
                let idx = key.indexOf(ch);
                if(idx !== -1) {
                    press = Math.min(idx + 1, press);
                }
            }
            if(press === Infinity) {
                count = -1;
                break;
            }
            count += press
        }
        result.push(count)
    }
    return result;
}