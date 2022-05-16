/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const fStr = strs[0]
  for (let i = 0; i < fStr.length; i++) {
    let c = fStr[i]
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j]
      if (i >= str.length || c != str[i]) {
        return fStr.slice(0, i)
      }
    }
  }

  return fStr
}
