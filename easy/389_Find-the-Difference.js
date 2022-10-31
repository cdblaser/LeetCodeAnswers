// https://leetcode.com/problems/find-the-difference/

var findTheDifference = function (s, t) {
  let sSorted = Array.from(s).sort().join("");
  let tSorted = Array.from(t).sort().join("");

  for (let i = 0; i < t.length; i++) {
    if (sSorted[i] !== tSorted[i]) return tSorted[i];
  }
};
