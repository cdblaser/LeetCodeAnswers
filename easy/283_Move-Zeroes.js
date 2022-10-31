// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function (nums) {
  let curr = 0;
  let numZeroes = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[curr] = nums[i];
      curr++;
    }
  }
  for (let i = curr; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};
