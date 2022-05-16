/**
 * 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？
 * 返回满足题意的二叉搜索树的种数。
 *
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n == 1) return 1

  const memo = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  const count = (min, max) => {
    if (min > max) {
      return 1
    }

    if (memo[min][max]) {
      return memo[min][max]
    }

    let ret = 0
    for (let i = min; i <= max; i++) {
      const leftTreeCount = count(min, i - 1)
      const rightTreeCount = count(i + 1, max)

      ret += leftTreeCount * rightTreeCount
    }

    memo[min][max] = ret

    return ret
  }

  return count(1, n)
}
