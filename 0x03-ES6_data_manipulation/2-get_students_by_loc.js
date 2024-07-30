// function that returns an array of objects who are located in a specific city.

export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter((student) => student.location === city);
  }
  return [];
}
