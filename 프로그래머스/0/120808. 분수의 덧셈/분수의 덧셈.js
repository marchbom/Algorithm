function solution(numer1, denom1, numer2, denom2) {
    let result = []
    let denom  = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let g = gcd(numer, denom)
    
    return [numer / g, denom / g]
}

