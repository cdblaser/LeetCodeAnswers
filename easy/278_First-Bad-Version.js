// https://leetcode.com/problems/first-bad-version/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 1,
      end = n;

    while (start < end) {
      let guess = Math.floor((start + end) / 2);
      if (isBadVersion(guess)) {
        end = guess;
      } else {
        start = guess + 1;
      }
    }

    return start;
  };
};
