/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 递归
  // const result = []

  // const recursion = root => {
  //   if (root == null) return

  //   recursion(root.left)
  //   result.push(root.val)
  //   recursion(root.right)
  // }

  // recursion(root)

  // return result

  // 栈
  const res = []
  const stk = []
  while (root || stk.length) {
    while (root) {
      stk.push(root)
      root = root.left
    }
    root = stk.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}
