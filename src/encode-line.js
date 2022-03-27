const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str.length === 0) return '';
  let arrEl = [];
  const arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    arrEl.push(arr[i]);
    if (arr[i] !== arr[i + 1]) {
      arrEl.push('*');
    }
  }
  arrEl = arrEl.join('').split('*').slice(0, -1).map((el, i, arr) => {
        if(el.length !== 1){
            return `${el.length}${el[0]}`;
        }else {
            return `${el[0]}`; 
        }
    });

  return arrEl.join('');
}

module.exports = {
  encodeLine
};
