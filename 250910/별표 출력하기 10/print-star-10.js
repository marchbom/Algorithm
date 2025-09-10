// 변수 선언 및 입력
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < 2 * n; i++) {
    str = "";
    if (i % 2 == 0) {
        for (let k = 0; k < 1 + i / 2; k++) {
            str += "* ";
        }
    }
    else {
        for (let k = 0; k < n - (i - 1) / 2; k++) {
            str += "* ";
        }
    }
    console.log(str);
}
