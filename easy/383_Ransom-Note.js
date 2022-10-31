// https://leetcode.com/problems/ransom-note/

var canConstruct = function (ransomNote, magazine) {
  const makeObj = (x) => {
    let xObj = {};
    for (let i = 0; i < x.length; i++) {
      if (!xObj[x[i]]) xObj[x[i]] = 1;
      else xObj[x[i]]++;
    }
    return xObj;
  };

  let ransomeNoteObj = makeObj(ransomNote);
  let magazineObj = makeObj(magazine);

  return Object.keys(ransomeNoteObj).every((x) => {
    return ransomeNoteObj[x] <= magazineObj[x];
  });
};
