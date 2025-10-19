function solution(arr1, arr2) {
    if(arr1.length > arr2.length) return 1;
    if(arr1.length < arr2.length) return -1;
    
    let sum1 = arr1.reduce((a, b) => a + b, 0);
    let sum2 = arr2.reduce((a, b) => a + b, 0);
    
    if(sum1 > sum2) return 1;
    if(sum1 < sum2) return -1;
    return 0;
}