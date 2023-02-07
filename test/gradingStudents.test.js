const gradingStudents = require("../iterators/gradingStudents.js");

describe("gradingStudents", () => {
  it("should round grades correctly according to the grading policy", () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
    expect(gradingStudents([84, 29, 33, 61, 57])).toEqual([85, 29, 33, 61, 57]);
    expect(
      gradingStudents([0, 99, 7, 39, 40, 55, 70, 85, 33, 67, 25, 45, 100])
    ).toEqual([0, 100, 7, 40, 40, 55, 70, 85, 33, 67, 25, 45, 100]);
  });
});
