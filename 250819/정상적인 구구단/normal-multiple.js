const fs = require('fs');
const N = Number(fs.readFileSync(0).toString().trim());


for(let i =1; i <= N; i++) {
    let str = ""
    for(let j = 1; j <= N; j++) {
        str += `${i} * ${j} = ${i*j}`
        if(j !== N) str += ", "
    }
    console.log(str)
}