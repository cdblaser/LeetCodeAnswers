// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  let curr = "";
  let prev = "";
  let output = "";
  const shortestWord = strs.reduce((prev, curr) => {
    return prev.length <= curr.length ? prev : curr;
  });
  if (shortestWord.length <= 0) return (output = "");
  if (strs.length === 1) return (output = strs[0]);
  for (let i = 0; i < shortestWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      curr = strs[j][i];
      prev = strs[j - 1][i];
      if (curr !== prev) {
        curr = "";
        return (output = output + curr);
      }
    }

    output = output + curr;
  }
  return output;
};
