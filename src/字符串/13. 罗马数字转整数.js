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

  let ret = 0,
    pre = 0
  for (let c of s) {
    const num = CODE_MAP[c]
    ret += num
    if (pre && num > pre) {
      ret = ret - pre * 2
    }
    pre = num
  }

  return ret
}
