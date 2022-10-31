// https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] < target) {
      temp++;
    }
  }
  return temp;
};
