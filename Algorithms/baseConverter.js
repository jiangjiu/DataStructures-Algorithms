/**
 * Created by zhangsiyuan on 16/6/12.
 */
//正整数转成其他进制
function baseConverter(num, base) {
  var stack = new Stack()
  var rem
  var binaryString = ''
  var digits = '0123456789ABCDEF'

  while (num > 0) {
    rem = num % base
    stack.push(rem)
    num = Math.floor(num / base)
  }
  
  while(!stack.isEmpty()) {
    binaryString += digits[stack.pop()]
  }
  
  return binaryString
}
