/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) {
    return head
  }
  const next = head.next
  next.next = head
  head.next = swapPairs(next.next)
  return next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 两两交换链表节点，
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairsTwo = function (head) {
  if (head == null || head.next == null) {
    return head
  }

  const dummyHead = new ListNode(0)
  dummyHead.next = head
  let temp = dummyHead
  while (temp.next !== null && temp.next.next !== null) {
    const node1 = temp.next
    const node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return dummyHead.next
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairsOne = function (head) {
  if (head == null || head.next == null) {
    return head
  }

  cur = head
  head = cur.next
  pre = null
  while (cur != null && cur.next != null) {
    if (pre != null) {
      pre.next = cur.next
    }
    const next = cur.next
    cur.next = next.next
    next.next = cur
    pre = cur
    cur = cur.next
  }

  return head
}
