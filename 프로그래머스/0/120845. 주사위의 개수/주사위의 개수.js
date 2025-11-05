function solution(box, n) {
    var answer = 0;
    
    let width = Math.floor(box[0] / n);
    let length = Math.floor(box[1] / n);
    let height = Math.floor(box[2] / n);
    
    
    return width * length * height;
}