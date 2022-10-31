// https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function (root) {
  const inOrderArr = [];

  var recursiveInorderTraversal = function (root) {
    if (!root) return;

    recursiveInorderTraversal(root.left);
    inOrderArr.push(root.val);

    recursiveInorderTraversal(root.right);
  };

  recursiveInorderTraversal(root);

  return inOrderArr;
};
