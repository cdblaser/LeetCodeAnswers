// https://leetcode.com/problems/island-perimeter/

var islandPerimeter = function (grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && grid[i][j] === 1) {
        perimeter++;
      }
      if (i === grid.length - 1 && grid[i][j] === 1) {
        perimeter++;
      }

      if (j === 0 && grid[i][j] === 1) {
        perimeter++;
      }
      if (j === grid[i].length - 1 && grid[i][j] === 1) {
        perimeter++;
      }

      if (grid[i][j + 1] !== undefined && grid[i][j] !== grid[i][j + 1]) {
        perimeter++;
      }

      if (grid[i + 1] !== undefined && grid[i][j] !== grid[i + 1][j]) {
        perimeter++;
      }
    }
  }

  return perimeter;
};
