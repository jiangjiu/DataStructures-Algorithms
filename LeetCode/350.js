/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  var arr = []
  var pos = 0
  if (nums1.length > nums2.length) {
    arr = nums1
    nums1 = nums2
    nums2 = arr
    arr = []
  }

  for (var i = 0, len = nums1.length; i < len; i++) {
    pos = nums2.indexOf(nums1[i])
    if (pos !== -1) {
      arr.push(nums1[i])
      nums2.splice(pos, 1)
    }
  }
  return arr
};