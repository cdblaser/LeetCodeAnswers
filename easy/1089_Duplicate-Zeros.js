// https://leetcode.com/problems/duplicate-zeros/description/

var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
  return arr;
};
