/*
    [ 2948번 - 2009년 ]
    문제 링크 : https://www.acmicpc.net/problem/2948
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = input[0].split(' ');

const M = arr[1];
const D = arr[0];

const day = new Date(`2009-${M}-${D}`).getDay();
let resultDay = '';

switch (day) {
    case 0: {
        resultDay = 'Sunday';
        break;
    }
    case 1: {
        resultDay = 'Monday';
        break;
    }
    case 2: {
        resultDay = 'Tuesday';
        break;
    }
    case 3: {
        resultDay = 'Wednesday';
        break;
    }
    case 4: {
        resultDay = 'Thursday';
        break;
    }
    case 5: {
        resultDay = 'Friday';
        break;
    }
    case 6: {
        resultDay = 'Saturday';
        break;
    }
}

console.log(resultDay);