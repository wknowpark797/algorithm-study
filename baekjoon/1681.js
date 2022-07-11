/*
    [ 1681번 - 줄 세우기 ]
    문제 링크 : https://www.acmicpc.net/problem/1681
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');

const studentCnt = parseInt(arr[0]); // 학생 수
const noNum = arr[1]; // 포함되지 않는 수

const label = [];

let i = 1;
while (label.length < studentCnt) {
    if (!i.toString().includes(noNum)) label.push(i);
    i++;
}

let bigNum = 0;
label.forEach((value) => {
    if (value > bigNum) bigNum = value;
});

console.log(bigNum);