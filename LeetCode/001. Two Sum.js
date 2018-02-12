/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const result = [];
    for (let i = 0, len = nums.length; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((nums[i] + nums[j]) === target) {
                result.push(i, j);
                return result;
            }
        }
    }
};
