/*
    [ 2592번 - 대표값 ]
    문제 링크 : https://www.acmicpc.net/problem/2592
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

// 평균
function average(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum += parseInt(value);
    });

    return sum / arr.length;
}

// 최빈값
function moreNum(arr) {
    const countObj = {};
    arr.forEach((value) => {
        if (!countObj.hasOwnProperty(value)) {
            countObj[value] = 1;
        } else {
            countObj[value]++;
        }
    });

    let bigKey = '';
    let bigVal = 0;
    for (const key in countObj) {
        if (countObj[key] > bigVal) {
            bigKey = key;
            bigVal = countObj[key];
        }
    }

    return bigKey;
}

console.log(average(input));
console.log(moreNum(input));