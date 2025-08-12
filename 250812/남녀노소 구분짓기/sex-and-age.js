const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let gender = Number(input[0]);
let age = Number(input[1])

if(gender === 0){
     if(age >= 19 ){
    console.log("MAN")
    } else {
    console.log("BOY")
    }
}

if(gender === 1){
     if(age >= 19 ){
    console.log("WOMAN")
    } else {
    console.log("GIRL")
    }
}
