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
var preorderTraversal = function (root) {
  // 栈
  // const res = []
  // const stk = []
  // while (root || stk.length) {
  //   if (root != null) {
  //     res.push(root.val)
  //     stk.push(root)
  //     root = root.left
  //   } else {
  //     root = stk.pop()
  //     root = root.right
  //   }
  // }
  // return res

  // 递归
  const res = []

  const traverse = root => {
    if (!root) return

    res.push(root.val)
    traverse(root.left)
    traverse(root.right)
  }

  traverse(root)

  return res
}
