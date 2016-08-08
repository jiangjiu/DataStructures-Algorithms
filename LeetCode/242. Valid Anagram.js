/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  s = s.split('').sort().toString()
  t = t.split('').sort().toString()
  return s === t
};