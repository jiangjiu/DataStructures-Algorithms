/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 3) {
    return 0
  }
  var count = 1
  var flag
  for (var i = 3; i < n; i += 2) {
    flag = true
    for (var j = 3; j * j <= i; j += 2) {
      if (i % j === 0) {
        flag = false
        break;
      }
    }
    if (flag) {
      count++
    }
  }
  return count
};