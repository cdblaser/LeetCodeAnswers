// https://leetcode.com/problems/guess-number-higher-or-lower/

var guessNumber = function (n) {
  const recursiveFxn = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    if (guess(mid) === 0) return mid;
    else if (guess(mid) === -1) return recursiveFxn(start, mid - 1);
    else if (guess(mid) === 1) return recursiveFxn(mid + 1, end);
  };
  return recursiveFxn(0, n);
};
