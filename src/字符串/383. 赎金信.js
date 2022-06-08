/**
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false
  }
  const codeA = 'a'.charCodeAt()
  const cnt = new Array(26).fill(0)
  for (const c of magazine) {
    cnt[c.charCodeAt() - codeA]++
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt() - codeA]--
    if (cnt[c.charCodeAt() - codeA] < 0) {
      return false
    }
  }
  return true
}
