/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = s.split('');
    var answer = 0;
    for(let i=0; i < arr.length ; i++) {
        if (arr[i] === 'I' && arr[i+1] === 'V') {
            answer += 4;
            i++;
            continue;
        }
        if (arr[i] === 'I' && arr[i+1] === 'X') {
            answer += 9;
            i++;
            continue;
        }
        if (arr[i] === 'X' && arr[i+1] === 'L') {
            answer += 40;
            i++;
            continue;
        }
        if (arr[i] === 'X' && arr[i+1] === 'C') {
            answer += 90;
            i++;
            continue;
        }
        if (arr[i] === 'C' && arr[i+1] === 'D') {
            answer += 400;
            i++;
            continue
        }
        if (arr[i] === 'C' && arr[i+1] === 'M') {
            answer += 900;
            i++;
            continue
        }
        if (arr[i] === 'M') answer += 1000;
        if (arr[i] === 'D') answer += 500;
        if (arr[i] === 'C') answer += 100;
        if (arr[i] === 'L') answer += 50;
        if (arr[i] === 'X') answer += 10;
        if (arr[i] === 'V') answer += 5;
        if (arr[i] === 'I') answer += 1;
    }
    return answer;
};