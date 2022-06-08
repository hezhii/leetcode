/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0,
    fast = 1
  isFull = false
  while (fast < nums.length) {
    if (slow < 1 || nums[slow - 1] != nums[fast]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
}
