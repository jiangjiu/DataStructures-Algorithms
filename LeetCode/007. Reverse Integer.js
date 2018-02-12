/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var max = Math.pow(2, 31)
  var re = x.toString().split('')
  if (x < 0) {
    re.unshift()
  }

  re = parseInt(re.reverse().join(''))
  if (re > max) {
    re = 0
  }
  return x < 0 ? -re : re
};