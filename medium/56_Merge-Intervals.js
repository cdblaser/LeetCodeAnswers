// https://leetcode.com/problems/merge-intervals/

var merge = function (intervals) {
  let min = 0,
    max = 0;
  let arr = [];
  let temp = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    temp = intervals[i];
    min = intervals[i][0];
    max = intervals[i][1];
    for (let j = i + 1; j < intervals.length; j++) {
      if (Math.max(...temp) >= intervals[j][0]) {
        temp = [...temp, ...intervals[j]];
        max = max > Math.max(...temp) ? max : Math.max(...temp);
        min = min < Math.min(...temp) ? min : Math.min(...temp);
        i++;
      } else {
        arr.push([min, max]);
        break;
      }
    }

    if (i === intervals.length - 1) {
      arr.push([min, max]);
    }
  }
  return arr;
};
