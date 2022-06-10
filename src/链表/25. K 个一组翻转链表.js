/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 判断是否存在 K 个节点
  let cur = head
  for (let i = 0; i < k; i++) {
    if (cur == null) {
      return head
    }
    cur = cur.next
  }
  const nextKGroupHead = reverseKGroup(cur, k)

  const newHead = reverseList(head, k)
  head.next = nextKGroupHead
  return newHead
}

/**
 * 反转从 head 开始的 k 个节点
 * @param {*} head
 * @param {*} k
 * @returns
 */
var reverseList = function (head, k) {
  let cur = head
  let pre = null
  let i = 0
  while (i < k) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
    i++
  }
  return pre
}
