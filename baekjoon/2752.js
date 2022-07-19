/*
    [ 2752번 - 세수정렬 ]
    문제 링크 : https://www.acmicpc.net/problem/2752
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');
const numArr = arr.map((value) => {
    return parseInt(value);
});

for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
        // j + 1 === undefined의 경우
        if (j >= numArr.length - 1) {
            continue;
        }

        // Swap
        if (numArr[j] > numArr[j + 1]) {
            let temp = numArr[j];
            numArr[j] = numArr[j + 1];
            numArr[j + 1] = temp;
        }
    }
}

console.log(numArr.join(' '));