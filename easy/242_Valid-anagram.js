//leetcode.com/problems/valid-anagram/

https: var isAnagram = function (s, t) {
  let sArr = Array.from(s).sort().toString();
  let tArr = Array.from(t).sort().toString();

  if (sArr === tArr) return true;

  return false;
};
