function solution(a, b, c) {
    let result = 0
   if(a !== b && b !== c && a !== c) {
       result = a + b + c;
   } else if((a === b && b !== c) || (a === c && b !== a) || (b === c && a !== b)) {
       result = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) 
   } else if(a === b && b === c) {
       result = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * 
           (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3)) 
   }
    return result;
}