/*
    [ 2028번 - 자기복제수 ]
    문제 링크 : https://www.acmicpc.net/problem/2028
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

for (const item of input) {
    resultCalc(item.trim());
}

function resultCalc(str) {
    // 제곱수
    const startNum = parseInt(str);
    const powNum = Math.pow(startNum, 2);

    // 자기복제수 체크
    const arr = powNum.toString().split('');
    const lastNumArr = arr.slice(-str.length);
    const lastNum = parseInt(lastNumArr.join(''));

    if (lastNum === startNum) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}