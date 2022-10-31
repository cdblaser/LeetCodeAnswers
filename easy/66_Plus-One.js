// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let int = 0;
  const n = digits.length;

  if (digits[n - 1] !== 9) {
    digits[n - 1] += 1;
    return digits;
  }

  if (digits.every((x) => x === 9)) {
    for (let i = 0; i < n; i++) {
      digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
  }

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
};
