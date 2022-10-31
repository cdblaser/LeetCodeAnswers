// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function (nums) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      max = counter > max ? counter : max;
    } else {
      counter = 0;
    }
  }
  return max;
};
