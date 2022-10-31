// https://leetcode.com/problems/assign-cookies/

var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  console.log(s, g);
  let sIndex = 0;

  for (let i = g.length - 1; i >= 0; i--) {
    if (s[sIndex] >= g[g.length - 1 - i]) {
      sIndex++;
    }
  }

  return sIndex;
};
