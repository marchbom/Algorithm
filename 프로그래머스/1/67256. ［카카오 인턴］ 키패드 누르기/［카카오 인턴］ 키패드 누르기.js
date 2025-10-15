function solution(numbers, hand) {
    let keypad = {
        1: [0,0], 2: [0,1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6:[1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#":[3, 2]
    };
    let left = "*";
    let right = "#";
    let result = [];
    
    const distance = (a, b) => {
        const [x1, y1] = keypad[a];
        const [x2, y2] = keypad[b];
        return Math.abs(x1-x2) + Math.abs(y1-y2);
    };
    
    for(let num of numbers) {
        if([1, 4, 7].includes(num)) {
            result.push("L")
            left = num;
        } else if([3, 6, 9].includes(num)) {
            result.push("R");
            right = num
        } else {
            const leftDistance = distance(left, num);
            const rightDistance = distance(right, num);
            
            if (leftDistance < rightDistance) {
                result.push("L");
                left = num;
              } else if (rightDistance < leftDistance) {
                result.push("R");
                right = num;
              } else {
                if (hand === "left") {
                  result.push("L");
                  left = num;
                } else {
                  result.push("R");
                  right = num;
                }
             }
        }
    }
    return result.join("");
}