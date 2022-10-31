// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  let length = nums.length;
  let k = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] == nums[i + 1]) {
      k++;
    } else {
      nums[i - k] = nums[i];
    }
  }

  return length - k;
};
