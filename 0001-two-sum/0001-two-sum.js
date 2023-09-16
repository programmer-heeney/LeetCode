/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const answers = [];
    const diffs = new Set(nums.map((num)=>target-num));
    nums.forEach((num, i)=>{
        if(diffs.has(num)){
            if(nums.indexOf(target-num) !== i || nums.lastIndexOf(target-num) !== i){
                answers.push(i);
            }
        }
    })
    return answers;
};