function solution(n) {
  const primeList = [];
  
  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (const p of primeList) {
      if (p * p > i) break;     
      if (i % p === 0) {         
        isPrime = false;
        break;
      }
    }

    if (isPrime) primeList.push(i);
  }

  return primeList.length;
}