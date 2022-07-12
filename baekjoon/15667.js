/*
    [ 15667번 - 2018 연세대학교 프로그래밍 경진대회 ]
    문제 링크 : https://www.acmicpc.net/problem/15667
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

let k = 0;
let i = 1;

while (k === 0) {
    if (i + i * i === N - 1) {
        k = i;
    }
    i++;
}

console.log(k);