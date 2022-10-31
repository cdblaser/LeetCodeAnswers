// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  nums1.length = m;
  nums2.length = n;
  while (i < m + n) {
    while (nums2[j] <= nums1[i]) {
      nums1.splice(i, 0, nums2[j]);

      nums2.shift();

      i++;
    }

    i++;
  }
  for (let j = 0; j < nums2.length; j++) {
    nums1.push(nums2[j]);
  }

  return nums1;
};
