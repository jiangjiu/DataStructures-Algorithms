/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * 思路：请考虑进位carry；
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const root = new ListNode(-1);
    let cur = root;
    let carry = 0;
    let sum = 0;

    while (l1 || l2 || carry) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);

        cur = cur.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

    }
    return root.next;
};
