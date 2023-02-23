var generate = function (numRows) {
  // create an empty array to hold the triangle
  let triangle = [];

  // loop numRows times to generate each row of the triangle
  for (let i = 0; i < numRows; i++) {
    // create an empty array for the current row
    let row = [];

    // loop over each position in the row
    for (let j = 0; j <= i; j++) {
      // if the position is the first or last position in the row,
      // the value is always 1
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        // otherwise, the value is the sum of the two values directly above it
        // in the previous row of the triangle
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }

    // add the completed row to the triangle
    triangle.push(row);
  }

  // return the completed triangle
  return triangle;
};

module.exports = generate;