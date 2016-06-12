// 队列
function Queue() {
  var item = []

  this.enQueue = function (el) {
    item.push(el)
  }

  this.deQueue = function () {
    return item.shift()
  }

  this.front = function () {
    return item[0]
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