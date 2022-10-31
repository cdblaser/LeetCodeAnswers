// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  const numsObj = {};
  let singleNum;
  for (let i = 0; i < nums.length; i++) {
    if (!numsObj[nums[i]]) numsObj[nums[i]] = 1;
    else numsObj[nums[i]]++;
  }

  Object.entries(numsObj).forEach((x) => {
    console.log(x);
    if (x[1] === 1) singleNum = x[0];
  });
  return singleNum;
};
