/*
    [ 6322번 - 직각 삼각형의 두 변 ]
    문제 링크 : https://www.acmicpc.net/problem/6322
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.forEach((value, index) => {
    if (value === '0 0 0') {
        return false;
    }

    resultCalc(value, index);
});

function resultCalc(str, index) {
    const arr = str.split(' ');

    const a = parseInt(arr[0]);
    const b = parseInt(arr[1]);
    const c = parseInt(arr[2]);

    const idx = index + 1;
    let s = '';
    let l = 0;

    if (a === -1) {
        s = 'a';
        l = Math.sqrt(c * c - b * b);
    } else if (b === -1) {
        s = 'b';
        l = Math.sqrt(c * c - a * a);
    } else if (c === -1) {
        s = 'c';
        l = Math.sqrt(a * a + b * b);
    }

    // NaN 체크
    if (isNaN(l) || l <= 0) {
        l = 'Impossible.';

        console.log(`Triangle #${idx}\n${l}\n`);
    } else {
        l = l.toFixed(3);

        console.log(`Triangle #${idx}\n${s} = ${l}\n`);
    }
}