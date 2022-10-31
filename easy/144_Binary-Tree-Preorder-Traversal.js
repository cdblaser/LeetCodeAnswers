// https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function (root) {
  let arr = [];
  const recursiveFxn = (root) => {
    if (!root) return;
    arr.push(root.val);
    recursiveFxn(root.left);

    recursiveFxn(root.right);
  };
  recursiveFxn(root);
  return arr;
};
