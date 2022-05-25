/**
 *
 * IVX
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const CODE_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let ret = 0

  for (let i = 0; i < s.length; i++) {
    const num = CODE_MAP[s[i]]
    if (i < s.length - 1 && num < CODE_MAP[s[i + 1]]) {
      ret -= num
    } else {
      ret += num
    }
  }
  return ret
}
