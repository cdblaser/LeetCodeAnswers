// https://leetcode.com/problems/pascals-triangle/

var generate = function (numRows) {
  const pascalArr = [[1]];

  for (let i = 1; i < numRows; i++) {
    pascalArr.push([]);
    pascalArr[i].push(1);
    for (let j = 0; j < i; j++) {
      if (j + 1 === i) {
        pascalArr[i].push(1);
      } else {
        pascalArr[i].push(pascalArr[i - 1][j] + pascalArr[i - 1][j + 1]);
      }
    }
  }

  return pascalArr;
};
