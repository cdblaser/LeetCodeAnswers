// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

var dominantIndex = function (nums) {
  const max = Math.max(...nums);

  const index = nums.findIndex((x) => x === max);

  for (let i = 0; i < nums.length; i++) {
    if (i !== index && nums[i] * 2 > max) {
      return -1;
    }
  }

  return index;
};
