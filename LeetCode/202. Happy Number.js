/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  if (n < 10) {
    return !!(n === 1 || n === 7)
  }

  n = n.toString().split('').map(function (item) {
    return item * item
  }).reduce(function (a, b) {
    return a + b
  })

  return isHappy(n)
};
