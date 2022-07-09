/*
    [ 5523번 - 경기 결과 ]
    문제 링크 : https://www.acmicpc.net/problem/5523
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

let aCount = 0;
let bCount = 0;

input.forEach((value) => {
    result(value);
});

function result(strArr) {
    const arr = strArr.split(' ');
    const A = parseInt(arr[0]);
    const B = parseInt(arr[1]);

    if (A > B) {
        aCount++;
    } else if (A < B) {
        bCount++;
    }
}

console.log(`${aCount} ${bCount}`);