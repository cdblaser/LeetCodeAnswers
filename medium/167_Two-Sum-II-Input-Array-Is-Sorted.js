// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function (numbers, target) {
  const obj = {};
  const arr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (obj[numbers[i]]) {
      arr.push(obj[numbers[i]], i + 1);
    }
    obj[target - numbers[i]] = i + 1;
  }
  return arr;
};
