/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var arr = []
  nums1 = unique(nums1)
  nums2 = unique(nums2)
  if (nums1.length >= nums2.length) {
    arr = nums1
    nums1 = nums2
    nums2 = arr
    arr = []
  }
  for (var i = 0, len = nums1.length; i < len; i++) {
    if (nums2.indexOf(nums1[i]) !== -1) {
      arr.push(nums1[i])
    }
  }
  return arr

};

function unique(nums) {
  var arr = []
  for (var i = 0, len = nums.length; i < len; i++) {
    if (arr.indexOf(nums[i]) === -1) {
      arr.push(nums[i])
    }
  }
  return arr
}