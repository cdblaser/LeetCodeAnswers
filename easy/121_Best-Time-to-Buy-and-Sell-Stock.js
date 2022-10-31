// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let dif;
  let maxDif = 0;
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[maxIndex]) {
      maxIndex = i;
      dif = prices[maxIndex] - prices[minIndex];
      if (dif > maxDif) maxDif = dif;
    } else if (prices[i] < prices[minIndex]) {
      minIndex = i;
      maxIndex = i;
    }
  }

  return maxDif;
};
