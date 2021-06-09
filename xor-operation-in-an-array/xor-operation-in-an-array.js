/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var nums = [];
    
    for (let i = 0; i < n; i++) {
        nums[i] = start + 2*i;
    }
    
    return nums.reduce((accumulator, current) => accumulator^current);
    
};