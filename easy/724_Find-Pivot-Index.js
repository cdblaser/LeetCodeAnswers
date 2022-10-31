// https://leetcode.com/problems/find-pivot-index/

var pivotIndex = function (nums) {
  let index = -1;
  let left = 0;
  let right = 0;
  for (let i = 1; i < nums.length; i++) {
    right += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      right -= nums[i];
      left += nums[i - 1];
    }
    if (left === right) {
      return (index = i);
    }
  }

  return index;
};
