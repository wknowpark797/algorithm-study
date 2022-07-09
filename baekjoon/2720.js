/*
    [ 2720번 - 세탁소 사장 동혁 ]
    문제 링크 : https://www.acmicpc.net/problem/2720
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

function changeAmount(amount) {
    let quarterCnt = 0;
    let dimeCnt = 0;
    let nickelCnt = 0;
    let pennyCnt = 0;

    if (amount >= QUARTER) {
        quarterCnt = parseInt(amount / QUARTER);
        amount -= quarterCnt * QUARTER;
    }
    if (amount >= DIME) {
        dimeCnt = parseInt(amount / DIME);
        amount -= dimeCnt * DIME;
    }
    if (amount >= NICKEL) {
        nickelCnt = parseInt(amount / NICKEL);
        amount -= nickelCnt * NICKEL;
    }
    if (amount >= PENNY) {
        pennyCnt = parseInt(amount / PENNY);
        amount -= pennyCnt * PENNY;
    }

    console.log(`${quarterCnt} ${dimeCnt} ${nickelCnt} ${pennyCnt}`);
}

input.forEach((value) => {
    changeAmount(parseInt(value));
});