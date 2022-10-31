// https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i] * 2 || arr[i] === arr[j] * 2) {
        return true;
      }
    }
  }
  return false;
};
