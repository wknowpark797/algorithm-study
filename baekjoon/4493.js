/*
    [ 4493번 - 가위 바위 보? ]
    문제 링크 : https://www.acmicpc.net/problem/4493
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');

input.shift();

// 입력받은 배열 slice로 분리
input.forEach((value, index) => {
    if (Number.isInteger(parseInt(value))) {
        const newArr = input.slice(index, index + parseInt(value) + 1);
        resultCalc(newArr);
    }
});

// 승자 구분하기
function resultCalc(arr) {
    arr.shift();

    let player1Cnt = 0;
    let player2Cnt = 0;

    arr.forEach((value) => {
        const compareArr = value.split(' ');

        // 공백 요소 제거 -> 찾느라 엄청 삽질함
        const player1Select = compareArr[0].trim();
        const player2Select = compareArr[1].trim();

        if ((player1Select === 'R' && player2Select === 'S') || (player1Select === 'S' && player2Select === 'P') || (player1Select === 'P' && player2Select === 'R')) {
            player1Cnt++;
        } else if ((player2Select === 'R' && player1Select === 'S') || (player2Select === 'S' && player1Select === 'P') || (player2Select === 'P' && player1Select === 'R')) {
            player2Cnt++;
        }
    });

    if (player1Cnt > player2Cnt) {
        console.log('Player 1');
    } else if (player1Cnt < player2Cnt) {
        console.log('Player 2');
    } else if (player1Cnt === player2Cnt) {
        console.log('TIE');
    }
}