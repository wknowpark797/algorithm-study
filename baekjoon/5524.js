/*
    [ 5524번 - 입실 관리 ]
    문제 링크 : https://www.acmicpc.net/problem/5524
*/

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

input.forEach((value) => {
    console.log(value.toLowerCase());
});