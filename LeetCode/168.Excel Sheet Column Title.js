/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  var arr = []
  var result = foo(n)
  return result.reverse().map(function (item) {
    return String.fromCharCode(item + 65)
  }).reduce(function (a, b) {
    return a + b
  })

  function foo(n) {
    if (n <= 0) {
      return arr
    }
    arr.push((n - 1) % 26)
    n = Math.floor((n - 1) / 26)
    return foo(n)
  }
};