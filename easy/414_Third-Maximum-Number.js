// https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let count = 0;

  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] !== nums[i - 1]) {
      count++;
    }
    if (count === 2) {
      return nums[i - 1];
    }
  }
  return nums[nums.length - 1];
};
