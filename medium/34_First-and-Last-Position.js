// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  const arr = [];
  let startIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid" + mid);

    if (nums[mid] === target) {
      startIndex = mid;
      console.log("startIndex" + startIndex);
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  let endIndex = startIndex;

  while (nums[endIndex] === target) {
    endIndex++;
  }
  if (endIndex !== -1) endIndex--;

  return [startIndex, endIndex];
};
