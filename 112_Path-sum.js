//https://leetcode.com/problems/path-sum/description/

var hasPathSum = function (root, targetSum) {
  const recursiveFxn = (root, sum) => {
    if (!root) return false;

    if (!root.left && !root.right) {
      let test = sum + root.val;
      if (test === targetSum) return true;
    }

    return (
      recursiveFxn(root.right, sum + root.val) ||
      recursiveFxn(root.left, sum + root.val)
    );
  };
  return recursiveFxn(root, 0);
};
