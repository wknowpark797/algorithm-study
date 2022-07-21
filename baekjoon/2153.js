/*
    [ 2153번 - 소수 단어 ]
    문제 링크 : https://www.acmicpc.net/problem/2153
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const inputStr = input[0];
const inputArr = inputStr.split('');

// 아스키코드 변환
let sum = 0;
for (const item of inputArr) {
    if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
        // 소문자 a(97) ~ z(122)
        sum += item.charCodeAt() - 96;
    } else if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
        // 대문자 A(65) ~ Z(90)
        sum += item.charCodeAt() - 38;
    }
}

// 소수 단어인지 판별
const resultArr = [];
for (let i = 1; i <= sum; i++) {
    if (sum % i === 0) {
        resultArr.push(i);
    }
}

if (resultArr.length <= 2 && resultArr.includes(sum)) {
    console.log('It is a prime word.');
} else {
    console.log('It is not a prime word.');
}