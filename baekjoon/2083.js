/*
    [ 2083번 - 럭비 클럽 ]
    문제 링크 : https://www.acmicpc.net/problem/2083
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const limitAge = 17;
const limitWeight = 80;

for (const item of input) {
    if (item === '# 0 0') {
        break;
    }
    resultCalc(item);
}

function resultCalc(str) {
    const arr = str.split(' ');

    const name = arr[0];
    const age = parseInt(arr[1]);
    const weight = parseInt(arr[2]);

    if (age > limitAge || weight >= limitWeight) {
        console.log(`${name} Senior`);
    } else {
        console.log(`${name} Junior`);
    }
}