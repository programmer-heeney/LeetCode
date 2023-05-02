/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function(nums) {
    let result = 1;
    let negativeCount = 0;
    nums.forEach((num) => {
        if(num === 0) result = 0;
        else if(num < 0) negativeCount++;
    })
    if(result && negativeCount && (negativeCount % 2 !== 0)) result = -1;
    return result;
};