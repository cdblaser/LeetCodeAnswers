// https://leetcode.com/problems/excel-sheet-column-number/description/

var titleToNumber = function (columnTitle) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphaArr = alphabet.split("");
  let columnValue = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    columnValue +=
      26 ** (columnTitle.length - 1 - i) *
      (alphaArr.indexOf(columnTitle[i]) + 1);
  }

  return columnValue;
};
