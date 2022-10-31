// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

var strStr = function (haystack, needle) {
  const arrFromHaystack = Array.from(haystack);
  const arrFromNeedle = Array.from(needle);
  let findTheNeedle = false;
  const needleLength = arrFromNeedle.length;
  let index;
  let count = 0;
  let k = 0;

  if (arrFromNeedle.length > arrFromHaystack.length) return -1;

  for (let i = 0; i < arrFromHaystack.length; i++) {
    if (arrFromHaystack[i] === arrFromNeedle[0]) {
      index = i;
      let k = i;
      for (let j = 0; j < arrFromNeedle.length; j++) {
        if (arrFromNeedle[j] === arrFromHaystack[k]) {
          count++;
          if (count === needleLength) return index;
          k++;
        } else {
          count = 0;
          break;
        }
      }
    }
  }

  return -1;
};
