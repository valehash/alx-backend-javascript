// function that returns an array of objects who are located in a specific city.

export default function getStudentIdSum(students) {
  if (students instanceof Array) {
    const initialValue = 0;
    const a = students.reduce((accumulator, currentValue) => accumulator
    + currentValue.id, initialValue);
    return a;
  }
  return [];
}
