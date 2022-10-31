// https://leetcode.com/problems/spiral-matrix/description/

var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRow = 0,
    firstColumn = 0,
    lastRow = m - 1,
    lastColumn = n - 1;
  let x = 0,
    y = 0,
    i = 0;
  const spiralArr = [];
  spiralArr.push(matrix[x][y]);
  while (i < m * n - 1) {
    while (y < lastColumn && i < m * n - 1) {
      y++;
      i++;
      spiralArr.push(matrix[x][y]);
      if (y === lastColumn) {
        firstRow++;
      }
    }
    while (x < lastRow && i < m * n - 1) {
      x++;
      i++;
      spiralArr.push(matrix[x][y]);
      if (x === lastRow) {
        lastColumn--;
      }
    }
    while (y > firstColumn && i < m * n - 1) {
      y--;
      i++;
      spiralArr.push(matrix[x][y]);
      if (y === firstColumn) {
        lastRow--;
      }
    }
    while (x > firstRow && i < m * n - 1) {
      x--;
      i++;
      spiralArr.push(matrix[x][y]);
      if (x === firstRow) {
        firstColumn++;
      }
    }
  }

  return spiralArr;
};
