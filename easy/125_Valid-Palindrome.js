// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  let slc = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let slcArr = [...slc].reverse().join("");

  if (slcArr === slc) return true;
  return false;
};
