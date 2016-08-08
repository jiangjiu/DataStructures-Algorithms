/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var len = digits.length
  var i
  for (i = len - 1; i >= -1; i--) {
    if (i === -1) {
      digits.unshift(1)
    }
    if ((digits[i] + 1) % 10 === 0) {
      digits[i] = 0
    } else {
      digits[i]++
      break;
    }
  }

  return digits
};