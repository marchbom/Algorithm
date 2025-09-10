const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < 2 * n; i++) {
    str = "";
    if (i % 2 == 0) {
        for (let k = 0; k < n - i / 2; k++) {
            str += "* ";
        }
    } else {
        let stars = 1 + (i - 1) / 2;
        if (stars > n) {
            stars = n;
        }
        for (let k = 0; k < stars; k++) {
            str += "* ";
        }
    }
    console.log(str);
}