/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  s = s.split('')
  var s1 = ''
  var s2 = ''
  var sum = 0
  for (var i = 0, len = s.length; i < len;) {
    s1 = map[s[i]]
    s2 = (i + 1) === len ? 0 : map[s[i + 1]]

    if (s1 >= s2) {
      sum += s1
      i += 1
    } else {
      sum += s2 - s1
      i += 2
    }
  }
  return sum
};