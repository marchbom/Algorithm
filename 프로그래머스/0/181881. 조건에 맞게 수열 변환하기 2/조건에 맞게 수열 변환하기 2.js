function solution(arr) {
    let x = 0;
    
    while(true) {
        let prev = [...arr];
        
         for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] = arr[i] / 2
            } else if(arr[i] < 50 && arr[i] % 2 !== 0) {
                arr[i] = arr[i] * 2 + 1
            }
        }
        
        let isSame = true;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] !== prev[i]) {
                isSame = false;
                break;
            }
        }
        
        if(isSame) return x;
        x++;
    }
}