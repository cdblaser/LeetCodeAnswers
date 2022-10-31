// https://leetcode.com/problems/arranging-coins/

var arrangeCoins = function (n) {
  let a = 1,
    rowCount = 1;
  if (n === 2) return 1;
  while (a < n) {
    rowCount++;
    a += rowCount;
  }
  if (n < a) return rowCount - 1;
  else return rowCount;
};
