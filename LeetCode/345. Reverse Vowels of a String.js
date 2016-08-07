/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var i = 0
  var j = s.length
  var arr = s.split('')
  var temp
  while (i < j) {
    if (isVowel(arr[i]) && isVowel(arr[j])) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    } else if (isVowel(arr[i])) {
      j--
    } else if (isVowel(arr[j])) {
      i++
    } else {
      i++
      j--
    }
  }
  return arr.join('')
};

function isVowel(str) {
  return 'aoieuAOIEU'.indexOf(str) !== -1
}