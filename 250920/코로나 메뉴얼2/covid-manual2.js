const fs =require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = Array(4).fill(0)
let count = 0

for(let i = 0; i <input.length; i++) {
    const [yn, tempStr] = input[i].split(" ");
    const temp = Number(tempStr);
    if(yn === "Y" && temp >= 37) {
        arr[0]++
        count++
    } else if (yn === "N" && temp >= 37) {
        arr[1]++
    } else if (yn === "Y" && temp < 37) {
        arr[2]++
    } else if (yn === "N" && temp < 37) {
        arr[3]++
    } 
}
if (count >= 2) {
    arr.push("E")
}
console.log(arr.join(" "))