/**
 * Created by zhangsiyuan on 16/6/12.
 */
//栈
function Stack() {
  var item = []
  this.push = function (el) {
    item.push(el)
  }

  this.pop = function () {
    return item.pop()
  }

  this.peek = function () {
    return item[item.length - 1]
  }
  
  this.isEmpty = function () {
    return !item.length
  }

  this.size = function () {
    return item.length
  }

  this.clear = function () {
    item = []
  }

  this.print = function () {
    console.log(item.toString())
  }
}