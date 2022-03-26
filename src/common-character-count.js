const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1 === '') {
    return 0;
  }

  let str1Arr = s1.split('');
  let str2Arr = s2.split('');
  const res = [];

  str1Arr.map((el) => {
    if (str2Arr.includes(el)) {
      res.push(el);
      str2Arr.splice(str2Arr.indexOf(el), 1);
    }
  });

  return res.length;
}

module.exports = {
  getCommonCharacterCount,
};
