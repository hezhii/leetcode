/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。
 *
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []

  const generateTree = (min, max) => {
    const treeNodes = []
    if (min > max) {
      treeNodes.push(null)
      return treeNodes
    }

    for (let i = min; i <= max; i++) {
      const leftTreeNodes = generateTree(min, i - 1)
      const rightTreeNodes = generateTree(i + 1, max)
      for (const leftTreeNode of leftTreeNodes) {
        for (const rightTreeNode of rightTreeNodes) {
          const rootNode = new TreeNode(i, leftTreeNode, rightTreeNode)
          treeNodes.push(rootNode)
        }
      }
    }

    return treeNodes
  }

  return generateTree(1, n)
}
