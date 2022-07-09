/*
    [ 4470번 - 줄번호 ]
    문제 링크 : https://www.acmicpc.net/problem/4470
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

input.forEach((value, index) => {
    console.log(`${index + 1}. ${value}`);
});