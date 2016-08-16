/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var pos = 0
  while (pos < nums.length) {
    if (nums[pos] === nums[pos + 1]) {
      nums.splice(pos + 1, 1)
    } else {
      pos++
    }
  }
  return nums.length
};