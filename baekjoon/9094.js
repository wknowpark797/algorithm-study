/*
    [ 9094번 - 수학적 호기심 ]
    문제 링크 : https://www.acmicpc.net/problem/9094
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

input.forEach((value) => {
    resultCalc(value);
});

function resultCalc(str) {
    const arr = str.split(' ');
    const n = parseInt(arr[0]);
    const m = parseInt(arr[1]);

    let count = 0;
    for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            if (a < b && Number.isInteger((a * a + b * b + m) / (a * b))) {
                count++;
            }
        }
    }
    console.log(count);
}