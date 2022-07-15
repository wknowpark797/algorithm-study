/*
    [ 23794번 - 골뱅이 찍기 - 정사각형 ]
    문제 링크 : https://www.acmicpc.net/problem/23794
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const limit = N + 2;

for (let i = 0; i < limit; i++) {
    let rowStr = '';
    for (let j = 0; j < limit; j++) {
        if (i >= 1 && i <= N && j >= 1 && j <= N) {
            rowStr += ' ';
        } else {
            rowStr += '@';
        }
    }
    console.log(rowStr);
}