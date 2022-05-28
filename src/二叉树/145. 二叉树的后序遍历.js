/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 递归
  // const res = []

  // const traverse = root => {
  //   if (!root) return

  //   traverse(root.left)
  //   traverse(root.right)
  //   res.push(root.val)
  // }

  // traverse(root)

  // return res

  // 栈
  const res = []
  const stk = []
  let pre = null
  while (root || stk.length) {
    while (root != null) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    if (root.right == null || root.right == pre) {
      res.push(root.val)
      pre = root
      root = null
    } else {
      stk.push(root)
      root = root.right
    }
  }
  return res
}
