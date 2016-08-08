/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  num = Math.log(num) / Math.log(4)
  return Math.abs(num - Math.round(num)) < 1e-10
};