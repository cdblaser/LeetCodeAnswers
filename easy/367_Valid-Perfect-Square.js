// https://leetcode.com/problems/valid-perfect-square/description/

var isPerfectSquare = function (num) {
  if (num === 1) return true;
  for (let i = 1; i <= num / 2; i++) {
    if (i * i === num) return true;
  }
  return false;
};
