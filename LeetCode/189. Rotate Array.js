/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var temp = nums.splice(nums.length-k)
  Array.prototype.unshift.apply(nums,temp)
};