// https://leetcode.com/problems/remove-element/description/

var removeElement = function (nums, val) {
  if (nums.length < 1) return 0;
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
};
