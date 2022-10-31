// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums) {
  let countEvenInts = 0;
  nums.forEach((elem) => {
    if (elem.toString().length % 2 === 0) countEvenInts += 1;
  });
  return countEvenInts;
};
