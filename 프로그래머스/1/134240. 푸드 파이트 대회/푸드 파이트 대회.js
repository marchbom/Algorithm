function solution(food) {
   let result = []
   for(let i = 1; i < food.length; i++) {
        result.push(String(i).repeat(Math.floor(food[i] / 2)))
   }
    result = result.join("");
    return result + "0" + [...result].reverse().join("");
}