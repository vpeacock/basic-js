const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = [...('' + n)];
  let res = [];

  for (let i = 0; i < nArr.length; i++) {
    let tmpArr = nArr.slice(0);
    tmpArr.splice(i, 1);
    res.push(+tmpArr.join(''));
  }

  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};
