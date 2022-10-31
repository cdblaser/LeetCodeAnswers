// https://leetcode.com/problems/add-digits/

var addDigits = function (num) {
  let numArr = Array.from(num.toString(), Number);
  let reducedNum = numArr.length < 2 ? num : 0;
  const recursiveFxn = (num) => {
    if (num.length > 1) {
      reducedNum = num.reduce((a, b) => a + b, 0);
      numArr = Array.from(reducedNum.toString(), Number);

      recursiveFxn(numArr);
    } else {
      return reducedNum;
    }
  };
  recursiveFxn(numArr);
  return reducedNum;
};
