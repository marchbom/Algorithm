const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let Y = Number(input);


if(Y % 4 === 0) {
    if(Y % 100 ===0 && Y % 400 !== 0) {
         return console.log("false")
    }
        console.log("true")

} else {
     console.log("false");
}

