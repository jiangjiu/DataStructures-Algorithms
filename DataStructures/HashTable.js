// 散列表  分离链接法
function HashTable() {
  var table = []

  var loseloseHashCode = function (key) {
    var hash = 0
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash % 37
  }

  var valuePair = function (key, value) {
    this.key = key
    this.value = value
    this.toString = function () {
      return '[' + this.key + '-' + this.value + ']'
    }
  }

  this.put = function (key, value) {
    var position = loseloseHashCode(key)
    if (table[position] == undefined) {
      table[position] = new LinkedList()
    }

    table[position].append(new valuePair(key, value))
  }

  this.get = function (key) {
    var position = loseloseHashCode(key)

    if (table[position] !== undefined) {
      var current = table[position].getHead()

      while (current.next) {
        if (current.key === key) {
          return current.element.value
        }

        current = current.next
      }

      if (current.key === key) {
        return current.element.value
      }
    }

    return undefined
  }

  this.remove = function (key) {
    var position = loseloseHashCode(key)

    if (table[position] !== undefined) {
      var current = table[position].getHead()

      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element)
          if (table[position].isEmpty()) {
            table[position] = undefined
          }
        }
        current = current.next
      }

      if (current.element.key === key) {
        table[position].remove(current.element)
        if (table[position].isEmpty()) {
          table[position] = undefined
        }
      }

      return true
    }

    return false
  }
}
