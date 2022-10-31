// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/

var hasGroupsSizeX = function (deck) {
  const deckObj = {};
  if (deck.length === 1) return false;
  for (let i = 0; i < deck.length; i++) {
    if (!deckObj[deck[i]]) {
      deckObj[deck[i]] = 1;
    } else {
      deckObj[deck[i]]++;
    }
  }
  let objValues = Object.values(deckObj);
  let boolArr = [];
  for (let i = 2; i < 10; i++) {
    boolArr.push(objValues.every((x) => x % i === 0));
  }
  for (let i = 0; i < boolArr.length; i++) {
    if (boolArr[i]) return true;
  }

  return false;
};
