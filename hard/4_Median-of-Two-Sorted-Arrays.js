// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);

  if (arr.length % 2 !== 0) {
    return arr[(arr.length - 1) * 0.5];
  }

  return (
    (arr[Math.floor((arr.length - 1) * 0.5)] +
      arr[Math.ceil((arr.length - 1) * 0.5)]) *
    0.5
  );
};
