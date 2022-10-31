// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (nums) {
  let a = 0,
    b = nums.length - 1;
  let sortedArr = [];

  while (a <= b) {
    if (nums[a] * nums[a] >= nums[b] * nums[b]) {
      nums[a] = nums[a] * nums[a];
      sortedArr.push(nums[a++]);
    } else {
      nums[b] = nums[b] * nums[b];
      sortedArr.push(nums[b--]);
    }
  }

  return sortedArr.reverse();
};
