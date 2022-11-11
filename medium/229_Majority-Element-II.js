// https://leetcode.com/problems/majority-element-ii/description/

var majorityElement = function (nums) {
  const obj = {};
  const numFreq = [];

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  const n = Math.floor(nums.length / 3);
  for (let x in obj) {
    if (obj[x] > n) {
      numFreq.push(x);
    }
  }

  return numFreq;
};
