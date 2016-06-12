// 最小优先队列
function PriorityQueue() {
  var items = []

  function QueueElement(el, priority) {
    this.el = el
    this.priority = priority
  }

  this.enQueue = function (el, priority) {
    var queueElement = new QueueElement(el, priority)
    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      if (!added) {
        items.push(queueElement)
      }
    }
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
    return items
  }
}