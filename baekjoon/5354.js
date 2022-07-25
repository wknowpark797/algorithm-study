/*
    [ 5354번 - J박스 ]
    문제 링크 : https://www.acmicpc.net/problem/5354
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

for (const item of input) {
    resultCalc(item);
}

function resultCalc(str) {
    const num = parseInt(str);

    let resultStr = '';
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
                resultStr += '#';
            } else {
                resultStr += 'J';
            }
        }
        resultStr += '\n';
    }
    console.log(resultStr);
}