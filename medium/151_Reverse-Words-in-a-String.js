// https://leetcode.com/problems/reverse-words-in-a-string/

var reverseWords = function (s) {
  let w = "";
  let sArr = [];
  let sString = "";
  let sStringTrimmed;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      w += s[i];
    }
    if (i === s.length - 1) {
      sString = w.concat(" ", sString);
      w = "";
    } else if (s[i] === " " && s[i + 1] !== " ") {
      sString = w.concat(" ", sString);
      w = "";
    }
  }
  sStringTrimmed = sString.trim();

  return sStringTrimmed;
};
