/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  var arr = []
  if (numRows === 0) return arr
  arr.push([1])
  if (numRows === 1) return arr

  for (var i = 1; i < numRows; i++) {
    var pre = arr[i - 1]
    var cur = [1]
    for (var j = 1; j <= i; j++) {
      var temp1 = pre[j - 1]
      var temp2 = pre[j] ? pre[j] : 0
      cur.push(temp1 + temp2)
    }
    arr.push(cur)
  }
  return arr
};