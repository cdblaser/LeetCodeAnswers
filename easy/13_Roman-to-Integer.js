// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const convertRomanToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  let curr = 0;
  let prev = 0;
  const parker = [...s];
  for (let i = 0; i < parker.length; i++) {
    curr = convertRomanToArabic[parker[i]];
    if (i > 0) prev = convertRomanToArabic[parker[i - 1]];

    total += convertRomanToArabic[parker[i]];
    if (curr > prev) total -= 2 * prev;
  }

  return total;
};
