function solution(myString) {
    myString = myString.split("x").filter(str => str !== "").sort()
    
    return myString;
}