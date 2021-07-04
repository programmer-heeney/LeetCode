/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var str = x.toString();
    if (str === str.split('').reverse().join('')) return true;
    
    return false;
};