/*
    [ 19944번 - 뉴비의 기준은 뭘까? ]
    문제 링크 : https://www.acmicpc.net/problem/19944
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');

const limit = parseInt(arr[0]);
const grade = parseInt(arr[1]);
const newbieLimit = 2;

if (grade <= limit && grade <= newbieLimit) {
    console.log('NEWBIE!');
} else if (grade <= limit && grade > newbieLimit) {
    console.log('OLDBIE!');
} else {
    console.log('TLE!');
}