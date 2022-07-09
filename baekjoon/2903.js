/*
    [ 2903번 - 중앙 이동 알고리즘 ]
    문제 링크 : https://www.acmicpc.net/problem/2903
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

const num = parseInt(input[0]);

function dotCalc(num) {
    let rowDot = 2; // 한 변의 점의 개수
    let totalDot = 4; // 모든 점의 개수

    for (let i = 0; i < num; i++) {
        rowDot = rowDot + (rowDot - 1);
        totalDot = rowDot * rowDot;
    }

    return totalDot;
}

console.log(dotCalc(num));

/*
    초기 상태 : 점 4개, 한 변에 2개 (1+1) 
    1번째 : 점 9개, 한 변에 3개 (2+1) 
    2번째 : 점 25개, 한 번에 5개 (3+2) 
    3번째 : 점 81개, 한 변에 9개 (5+4) 
    4번째 : 점 289개, 한 변에 17개 (9+8) 
    5번째 : 점 1089개, 한 변에 33개 (17+16)
*/