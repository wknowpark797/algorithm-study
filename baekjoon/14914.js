/*
    [ 14914번 - 사과와 바나나 나눠주기 ]
    문제 링크 : https://www.acmicpc.net/problem/14914
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');

const a = arr[0];
const b = arr[1];

let i = 0;
while (i <= a || i <= b) {
    if (a % i === 0 && b % i === 0) {
        console.log(`${i} ${a / i} ${b / i}`);
    }
    i++;
}