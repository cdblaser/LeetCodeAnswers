// https://leetcode.com/problems/height-checker/

var heightChecker = function (heights) {
  const unsortedArr = [...heights];
  let num = 0;
  heights.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (unsortedArr[i] !== heights[i]) {
      num++;
    }
  }
  return num;
};
