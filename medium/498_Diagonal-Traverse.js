// https://leetcode.com/problems/diagonal-traverse/description/

var findDiagonalOrder = function (mat) {
  const diagArr = [];
  let i = 0,
    j = 0;
  let m = mat.length - 1;
  let n = mat[0].length - 1;
  if (m === 0) {
    return mat[0];
  }
  if (n === 0) {
    for (let i = 0; i < m + 1; i++) {
      diagArr.push(mat[i][0]);
    }
    return diagArr;
  }
  diagArr.push(mat[i][j]);
  while (i < m || j < n) {
    //top or right start
    if (i === 0 || j === n) {
      if (j < n) {
        j++;
        diagArr.push(mat[i][j]);
      } else if (i < m) {
        i++;
        diagArr.push(mat[i][j]);
      }

      while (i < m && j > 0) {
        i++;
        j--;
        diagArr.push(mat[i][j]);
      }
    }
    //left or bottom start
    if (j === 0 || i === m) {
      if (i < m) {
        i++;
        diagArr.push(mat[i][j]);
      } else if (j < n) {
        j++;
        diagArr.push(mat[i][j]);
      }
      while (i > 0 && j < n) {
        i--;
        j++;
        diagArr.push(mat[i][j]);
      }
    }
  }

  return diagArr;
};
