// https://leetcode.com/problems/rotate-array/description/

var rotate = function (nums, k) {
  if (k >= nums.length) {
    k = k % nums.length;
  }
  if (k === 0) return nums;

  nums.reverse();

  let a = 0,
    b = k - 1;

  while (a < k) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
    a++;
    b--;
  }

  a = 0;
  b = k - 1;
  while (a < b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
    a++;
    b--;
  }

  a = k;
  b = nums.length - 1;
  while (a < b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
    a++;
    b--;
  }

  return nums;
};
