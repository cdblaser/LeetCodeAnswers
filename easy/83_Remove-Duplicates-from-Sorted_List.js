// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function (head) {
  if (!head) return head;
  let next = head.next;
  while (next && head.val === next?.val) {
    next = next.next;
  }
  head.next = deleteDuplicates(next);
  return head;
};
