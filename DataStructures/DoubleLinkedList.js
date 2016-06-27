//	双向链表
function DoubleLinkedList() {
  var Node = function (element) {
    this.element = element
    this.next = null
    this.pre = null
  };

  var length = 0
  var head = null
  var tail = null

  this.insert = function (position, element) {

    if (position > -1 && position < length) {
      var node = new Node(element)
      var current = head
      var previous
      var index = 0

      if (position === 0) {
        if (!head) {
          head = node
          tail = node

        } else {
          current.previous = head
          current = node
          head = node

        }
      } else if (position === length) {
        current = tail
        current.next = node
        node.previous = current
        tail = node
      } else {

        while (index++ < length) {
          previous = current
          current = current.next
        }

        current.previous = node
        previous.next = node
        node.previous = previous
        node.next = current

      }
      length++
      return true
    } else {
      return false
    }
  }

  this.removeAt = function (position) {

    if (position > -1 && position < length) {
      var current = head
      var previous
      var index = 0

      if (position === 0) {

        head = current.next

        if (length === 1) {
          tail = null
        } else {
          head.pre = null
        }

      } else if (position === length - 1) {
        current = tail
        tail = current.pre
        tail.next = null

      } else {

        while (index++ < position) {
          previous = current
          current = current.next
        }

        previous.next = current.next
        current.next.pre = previous

      }
      
      length--
      return current.element
    } else {
      return null
    }
  }
}
