/*
    [ 19698번 - 헛간 청약 ]
    문제 링크 : https://www.acmicpc.net/problem/19698
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');

const N = parseInt(arr[0]); // 소들의 수
const W = parseInt(arr[1]); // 헛간의 Width 크기
const H = parseInt(arr[2]); // 헛간의 Height 크기
const L = parseInt(arr[3]); // 소들에게 배정되는 공간의 크기

const result = parseInt(W / L) * parseInt(H / L);

if (result > N) {
    console.log(N);
} else {
    console.log(result);
}