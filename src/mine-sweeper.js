const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let mines = 0;

  matrix.forEach((item) => {
    mines += item.filter((elem) => elem).length;
  });

  if (mines === 0) {
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        matrix[j][i] = 0;
      }
    }
    return matrix;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (!Number.isInteger(matrix[j][i]) && i === 0 && matrix[j][i]) {
        matrix[j][i] = mines - 1;
        matrix[j][i + 1] = mines;
      } else if (!Number.isInteger(matrix[j][i]) && matrix[j][i]) {
        matrix[j][i] = mines - 1;
        matrix[j][i - 1] = mines;
      } else if (!Number.isInteger(matrix[j][i]) && !matrix[j][i]) {
        matrix[j][i] = mines - 1;
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper
};
