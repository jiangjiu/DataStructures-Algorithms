/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  var sum = 0
  var arr = s.split('').map(function (item) {
    return item.charCodeAt(0) - 64
  })

  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr.pop() * Math.pow(26, i)
  }
  return sum
};