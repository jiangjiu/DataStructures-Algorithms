// 队列
function Queue() {
  var items = []

  this.enQueue = function (el) {
    items.push(el)
  }

  this.deQueue = function () {
    return items.shift()
  }

  this.front = function () {
    return items[0]
  }

  this.isEmpty = function () {
    return !items.length
  }

  this.size = function () {
    return items.length
  }

  this.clear = function () {
    items = []
  }

  this.print = function () {
    console.log(items.toString())
  }
}