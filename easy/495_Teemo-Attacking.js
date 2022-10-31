// https://leetcode.com/problems/teemo-attacking/description/

var findPoisonedDuration = function (timeSeries, duration) {
  let totalTimePoisoned = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    totalTimePoisoned += duration;
    if (timeSeries[i] + duration > timeSeries[i + 1]) {
      totalTimePoisoned -= timeSeries[i] + duration - timeSeries[i + 1];
    }
  }

  return totalTimePoisoned;
};
