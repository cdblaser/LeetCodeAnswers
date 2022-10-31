// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const arrFromS = [...s];
  const stack = [];

  for (let i = 0; i < arrFromS.length; i++) {
    const curr = arrFromS[i];
    const isOpener = Object.values(pairs).includes(curr);

    if (isOpener) {
      stack.push(curr);
    } else {
      if (pairs[curr] === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }

  if (stack.length > 0) return false;
  return true;
};
