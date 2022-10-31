// https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function (s) {
  let string = [...s];
  let reg = new RegExp(/[a-zA-Z]/);
  let a = 0,
    b = s.length - 1;

  while (a < b) {
    if (reg.test(string[a]) && reg.test(string[b])) {
      let temp = string[a];
      string[a] = string[b];
      string[b] = temp;
      a++;
      b--;
    }
    if (!reg.test(string[a])) a++;
    if (!reg.test(string[b])) b--;
  }

  return string.join("");
};
