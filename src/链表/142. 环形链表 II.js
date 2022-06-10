/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) {
      // 相遇后，让任意一个指针从头开始，走相同的步数，再次相遇的位置就是环的入口
      fast = head
      while (slow != fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycleOne = function (head) {
  if (head == null || head.next == null) {
    return null
  }

  let cur = head
  while (cur) {
    if (cur.visited === true) {
      return cur
    }
    cur.visited = true
    cur = cur.next
  }
  return null
}
