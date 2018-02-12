/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var root = new ListNode(-1)
  var cur = root
  var carry = 0
  var sum = 0
  while (l1 !== null || l2 !== null || carry === 1) {
    sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry
    var node = new ListNode(sum % 10)
    carry = Math.floor(sum / 10)
    cur.next = node
    cur = node
    l1 = (l1 !== null ? l1.next : null);
    l2 = (l2 !== null ? l2.next : null);
  }

  return root.next
}