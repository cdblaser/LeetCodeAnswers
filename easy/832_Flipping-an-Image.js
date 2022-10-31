//https://leetcode.com/problems/flipping-an-image/description/

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    let j = 0,
      k = image[i].length - 1;

    while (j <= k) {
      let temp = image[i][j];
      image[i][j] = image[i][k];
      image[i][k] = temp;

      image[i][j] ? (image[i][j] = 0) : (image[i][j] = 1);
      if (j !== k) image[i][k] ? (image[i][k] = 0) : (image[i][k] = 1);

      j++;
      k--;
    }
  }

  return image;
};
