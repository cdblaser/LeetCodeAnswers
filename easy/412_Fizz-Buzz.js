//https://leetcode.com/problems/fizz-buzz/description/

var fizzBuzz = function (n) {
  let fbArr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fbArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fbArr.push("Fizz");
    } else if (i % 5 === 0) {
      fbArr.push("Buzz");
    } else {
      fbArr.push(i.toString());
    }
  }
  return fbArr;
};
