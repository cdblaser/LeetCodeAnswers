// https://leetcode.com/problems/number-of-laser-beams-in-a-bank/description/

var numberOfBeams = function (bank) {
  let curr,
    prev = 0,
    total = 0;

  for (let i = 0; i < bank.length; i++) {
    curr = 0;

    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] == 1) {
        curr++;
      }
    }

    if (curr) {
      total += curr * prev;
      prev = curr;
    }
  }

  return total;
};
