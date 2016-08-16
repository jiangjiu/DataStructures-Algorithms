/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var map = {}
  for (var i = 0, len = nums.length; i < len; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
    if (map[nums[i]] > len / 2) {
      return nums[i]
    }
  }
};