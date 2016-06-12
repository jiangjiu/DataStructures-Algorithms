/**
 * Created by zhangsiyuan on 16/6/12.
 */
//正整数转成2进制
function divideBy2(num) {
  var stack = new Stack()
  var rem
  var binaryString = ''

  while (num > 0) {
    rem = num % 2
    stack.push(rem)
    num = Math.floor(num / 2)
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop().toString()
  }

  return binaryString
}