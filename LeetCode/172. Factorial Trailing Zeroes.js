/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  var sum = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    sum += n
  }
  return sum
};