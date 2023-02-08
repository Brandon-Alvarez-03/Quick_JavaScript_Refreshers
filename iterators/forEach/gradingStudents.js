// This function takes in an array of grades and rounds each grade according to the grading policy of the university.
// The .forEach method is used to iterate through each grade in the grades array.
// For each grade, a new grade is computed and pushed into the newGrades array.
// The final returned value is the newGrades array containing the rounded grades.

function gradingStudents(grades) {
  let newGrades = [];

  // Iterating through each grade in the grades array
  grades.forEach((grade) => {
    // If the grade is less than 38, it's already a failing grade and is pushed into the newGrades array as is
    if (grade < 38) {
      newGrades.push(grade);
    } else {
      // If the grade is equal to or greater than 38, the next multiple of 5 is computed
      let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
      // The difference between the grade and the next multiple of 5 is calculated
      let difference = nextMultipleOfFive - grade;
      // If the difference is less than 3, the grade is rounded up to the next multiple of 5
      if (difference < 3) {
        newGrades.push(nextMultipleOfFive);
      } else {
        // If the difference is equal to or greater than 3, the original grade is pushed into the newGrades array
        newGrades.push(grade);
      }
    }
  });

  return newGrades;
}
module.exports = gradingStudents;
