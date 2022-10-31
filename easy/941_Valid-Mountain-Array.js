// https://leetcode.com/problems/valid-mountain-array/description/

var validMountainArray = function (arr) {
  const maxInt = Math.max(...arr);
  const maxIndex = arr.indexOf(maxInt);

  if (
    typeof arr[maxIndex + 1] !== "number" ||
    typeof arr[maxIndex - 1] !== "number"
  ) {
    return false;
  }

  for (let i = 1; i <= maxIndex; i++) {
    if (arr[i] <= arr[i - 1]) return false;
  }

  for (let i = maxIndex + 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) return false;
  }

  return true;
};
