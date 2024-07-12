/* Write a JavaScript program which compute, the average marks of the following 
students Then, this average is used to determine the corresponding grade.
*/

const students = [
    ['David', 80],
    ['Vinoth', 77],
    ['Divya', 88],
    ['Ishitha', 95],
    ['Thomas', 68],
  ];
  
  let sumOfMarks = 0;
  
  for (let i = 0; i < students.length; i++) {
    sumOfMarks += students[i][1];
  }
  
  const average = sumOfMarks / students.length;
  
  console.log(`The average mark is: ${average}`);
  
  if (average < 60) {
    console.log('Grade: F');
  } else if (average < 70) {
    console.log('Grade: D');
  } else if (average < 80) {
    console.log('Grade: C');
  } else if (average < 90) {
    console.log('Grade: B');
  } else if (average <= 100) {
    console.log('Grade: A');
  }
  