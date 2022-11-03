// https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let waterAmount = 0;

  while (left < right) {
    waterAmount = Math.max(
      waterAmount,
      Math.min(height[left], height[right]) * (right - left)
    );

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return waterAmount;
};
