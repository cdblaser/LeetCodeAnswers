// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  return String(x) === Array.from(String(x)).reverse().join("");
};
