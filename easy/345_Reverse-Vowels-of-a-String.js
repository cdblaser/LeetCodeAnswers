// https://leetcode.com/problems/reverse-vowels-of-a-string/description/

var reverseVowels = function (s) {
  let vowels = new RegExp(/[AaEeIiOoUu]/);
  let strArr = s.split("");
  let i = 0,
    j = strArr.length - 1;

  while (i < j) {
    if (vowels.test(strArr[i]) && vowels.test(strArr[j])) {
      let temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;

      i++;
      j--;
    } else if (vowels.test(strArr[i])) {
      j--;
    } else if (vowels.test(strArr[j])) {
      i++;
    } else {
      i++;
      j--;
    }
  }
  return strArr.join("");
};
