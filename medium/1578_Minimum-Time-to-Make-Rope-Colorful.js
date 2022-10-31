// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/

var minCost = function (colors, neededTime) {
  let totalTimeRemoved = 0;

  const map = new Map();
  for (let i = 0; i < colors.length; i++) {
    if (!map.has(colors[i])) {
      map.set(colors[i], neededTime[i]);
    } else {
      if (colors[i] === colors[i - 1]) {
        if (map.get(colors[i]) < neededTime[i]) {
          totalTimeRemoved += map.get(colors[i]);
          map.set(colors[i], neededTime[i]);
        } else {
          totalTimeRemoved += neededTime[i];
        }
      } else {
        map.set(colors[i], neededTime[i]);
      }
    }
  }

  return totalTimeRemoved;
};
