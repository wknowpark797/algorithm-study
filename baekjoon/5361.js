/*
    [ 5361번 - 전투 드로이드 가격 ]
    문제 링크 : https://www.acmicpc.net/problem/5361
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

// 부품의 가격
const A = 350.34;
const B = 230.9;
const C = 190.55;
const D = 125.3;
const E = 180.9;

for (const item of input) {
    resultCalc(item);
}

function resultCalc(str) {
    const arr = str.split(' ');

    const aNum = arr[0];
    const bNum = arr[1];
    const cNum = arr[2];
    const dNum = arr[3];
    const eNum = arr[4];

    const result = A * aNum + B * bNum + C * cNum + D * dNum + E * eNum;
    console.log(`$${result.toFixed(2)}`);
}