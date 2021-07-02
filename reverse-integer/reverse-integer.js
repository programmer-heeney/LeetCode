/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var answer = '';
    var number = x;
    if(x < 0) number = number * (-1);
    do {
        answer = answer + number%10;
        number = Math.floor(number/10);
    }while(number);
    
    if(x < 0) answer = '-' + answer;
    
    let result = Number(answer);
    
    if (result < -(2**31) || result > (2**31) -1)
        return 0;
    
    return Number(answer);
};