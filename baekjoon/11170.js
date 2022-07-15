/*
    [ 11170번 - 0의 개수 ]
    문제 링크 : https://www.acmicpc.net/problem/11170
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

for (const item of input) {
    resultCalc(item);
}

function resultCalc(str) {
    const arr = str.split(' ');
    const start = parseInt(arr[0]);
    const end = parseInt(arr[1]);

    let zero = 0;

    for (let i = start; i <= end; i++) {
        const eachArr = i.toString().split('');

        for (const item of eachArr) {
            if (item === '0') {
                zero++;
            }
        }
    }

    console.log(zero);
}