// 字典
function Dictionary() {
  var items = {}

  this.has = function (key) {
    return items.hasOwnProperty(key)
  }

  this.set = function (key, value) {
    items[key] = value
  }

  this.remove = function (key) {

    if (this.has(key)) {
      delete items[key]
      return true
    }

    return false
  }

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined
  }

  this.keys = function () {
    return Object.keys(items)
  }

  this.values = function () {
    var values = []
    for (var key in items) {
      if (this.has(key)) {
        values.push(items[key])
      }
    }

    return values
  }

  this.clear = function () {
    items = {}
  }

  this.size = function () {
    return Object.keys(items).length
  }

  this.getItems = function () {
    return items
  }
}