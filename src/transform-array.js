const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const operations = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  let newArr = arr.slice();
  let addArr = [];
  let newArrFilter = [];
  let tmp = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (newArr[i] === operations[2] && i != newArr.length - 1) {
      tmp = newArr
        .slice(i, i + 2)
        .filter((elem) => !operations.includes(elem))[0];
      if (tmp != undefined) {
        newArr.splice(i + 1, 0, tmp);
      }
      newArrFilter = newArr.filter((elem) => !operations.includes(elem));
    } else if (newArr[i] === operations[3] && i != 0) {
      tmp = newArr
        .slice(i - 1, i)
        .filter((elem) => !operations.includes(elem))[0];
      if (tmp != undefined) {
        newArr.splice(i + 1, 0, tmp);
      }
      newArrFilter = newArr.filter((elem) => !operations.includes(elem));
    } else if (newArr[i] === operations[0] && i != newArr.length - 1) {
      newArr.splice(i + 1, 1);
      newArrFilter = newArr.filter((elem) => !operations.includes(elem));
    } else if (newArr[i] === operations[1] && i != 0) {
      newArr.splice(i - 1, 1);
      newArrFilter = newArr.filter((elem) => !operations.includes(elem));
    }else{
      newArrFilter = newArr.filter((elem) => !operations.includes(elem));
    }
  }
  return newArrFilter;
}


module.exports = {
  transform
};
