/**
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 1
  while (fast < nums.length) {
    if (nums[slow] != nums[fast]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
