/**
 * Created by zhangsiyuan on 16/8/7.
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var sum = 0
  var temp = 0
  var i = 0
  var j = height.length
  while (i < j) {
    temp = (j - i) * Math.min(height[i], height[j])
    sum = temp > sum ? temp : sum
    height[i] - height[j] < 0 ? i++ : j--
  }

  return sum
};