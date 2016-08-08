/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    var temp = a & b
    a = a ^ b
    b = temp << 1

  }
  return a
};