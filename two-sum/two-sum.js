/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        const num = target - nums[i];
        const index = nums.findIndex((item, idx) => idx!==i && item === num);
        if (index > -1) {
            return [i, index];
        }
    }
};