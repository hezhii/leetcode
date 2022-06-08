/**
 * 选择排序
 * @param {number[]} nums
 * @return {number[]}
 */
var selectionSortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    const tmp = nums[i]
    nums[i] = nums[minIndex]
    nums[minIndex] = tmp
  }
  return nums
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var bubbleSortArray = function (nums) {
  for (let i = nums.length - 1; i > 0; i--)
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
      }
    }

  return nums
}
