//https://leetcode.com/problems/sort-array-by-parity/description/

var sortArrayByParity = function (nums) {
  let curr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let temp = nums[i];
      nums[i] = nums[curr];
      nums[curr] = temp;
      curr++;
    }
  }

  return nums;
};
