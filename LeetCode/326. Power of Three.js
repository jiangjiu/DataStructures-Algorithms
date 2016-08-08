/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  n = Math.log(n) / Math.log(3)
  return Math.abs(n - Math.round(n)) < 1e-10
};