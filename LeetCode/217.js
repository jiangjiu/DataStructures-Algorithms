/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var arr = []
  for (var i = 0, len = nums.length; i < len; i++) {
    if (arr.indexOf(nums[i]) === -1) {
      arr.push(nums[i])
    } else {
      return true
    }
  }
  return false
};