// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

var findDisappearedNumbers = function (nums) {
  const n = nums.length;

  const missingNums = [];

  for (let i = 0; i < n; i++) {
    missingNums[i] = i + 1;
  }

  for (let i = 0; i < n; i++) {
    missingNums[nums[i] - 1] = 0;
  }

  return missingNums.filter((x) => x > 0);
};
