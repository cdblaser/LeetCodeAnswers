// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function (head) {
  let arr = [];
  let placeholder = head;
  let count = 0;
  while (head) {
    head = head.next;
    count++;
  }

  for (let i = 0; i < count; i++) {
    if (i < Math.floor(count / 2) - 1) {
      placeholder = placeholder.next;
    } else if (count === 1) return placeholder;
    else return placeholder.next;
  }
};
