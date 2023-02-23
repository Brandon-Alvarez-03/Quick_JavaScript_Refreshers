const generate = require("../pascalsTriangle.js");

describe("generate", () => {
  test("returns the correct triangle for numRows = 1", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  test("returns the correct triangle for numRows = 2", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  test("returns the correct triangle for numRows = 3", () => {
    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  test("returns the correct triangle for numRows = 5", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
});
