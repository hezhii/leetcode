/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 思路：双指针
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b) // 不能直接 sort，默认是 toString 比较

  const results = []
  for (let i = 0; i < nums.length; i++) {
    const towNum = -nums[i]

    let lo = i + 1
    let hi = nums.length - 1
    while (lo < hi) {
      const left = nums[lo]
      const right = nums[hi]
      const sum = left + right

      if (sum < towNum) {
        while (lo < hi && left === nums[lo]) lo++
      } else if (sum > towNum) {
        while (lo < hi && right === nums[hi]) hi--
      } else {
        results.push([nums[i], left, right])
        while (lo < hi && left === nums[lo]) lo++
        while (lo < hi && right === nums[hi]) hi--
      }
    }

    while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++
  }

  return results
}
