/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var temp = new ListNode(-1)
  temp.next = head
  var pre = temp
  var cur = head

  while (cur !== null) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }

  return temp.next

};