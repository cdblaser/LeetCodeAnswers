// https://leetcode.com/problems/reverse-words-in-a-string-iii/

var reverseWords = function (s) {
  let sArr = s.split(" ");
  let newS = "";
  for (let i = 0; i < sArr.length; i++) {
    newS = newS + " " + sArr[i].split("").reverse().join("");
  }
  return newS.trim();
};
