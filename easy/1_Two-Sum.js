// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let indices = [];
  const obj1 = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj1[nums[i]] >= 0) {
      indices.push(i, obj1[nums[i]]);
      return indices;
    }
    obj1[target - nums[i]] = i;
  }
};
