/*
    [ 2145번 - 숫자 놀이 ]
    문제 링크 : https://www.acmicpc.net/problem/2145
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

for (const item of input) {
    if (item === '0') {
        break;
    }

    resultCalc(item);
}

function resultCalc(str) {
    let sumNum = parseInt(str);

    while (sumNum.toString().length !== 1) {
        const arr = sumNum.toString().split('');

        let sumArr = 0;
        for (const item of arr) {
            sumArr += parseInt(item);
        }

        sumNum = sumArr;
    }

    console.log(sumNum);
}