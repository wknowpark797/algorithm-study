/*
    [ 11966번 - 2의 제곱인가? ]
    문제 링크 : https://www.acmicpc.net/problem/11966
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

let N = parseInt(input[0]);

while (true) {
    if (N === 1 || (parseInt(N / 2) === 1 && N % 2 === 0)) {
        console.log(1);
        break;
    }
    if (N % 2 === 1) {
        console.log(0);
        break;
    }

    N = parseInt(N / 2);
}