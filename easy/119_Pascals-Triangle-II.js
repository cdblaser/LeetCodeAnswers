// https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function (rowIndex) {
  let pascalsTriangle = [[1]];
  if (rowIndex === 0) return pascalsTriangle[0];

  for (let i = 1; i <= rowIndex; i++) {
    pascalsTriangle.push([1]);
    for (let j = 0; j < i; j++) {
      if (j + 1 === i) {
        pascalsTriangle[i].push(1);
      } else {
        pascalsTriangle[i].push(
          pascalsTriangle[i - 1][j] + pascalsTriangle[i - 1][j + 1]
        );
      }
    }
  }
  return pascalsTriangle[rowIndex];
};
