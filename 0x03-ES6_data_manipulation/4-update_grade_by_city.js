// function that returns an array of objects who are located in a specific city.

export default function updateStudentGradeByCity(students, city, NewgradeArray) {
  const StudentsLoc = students.filter((stu) => stu.location === city);
  return StudentsLoc.map((students) => {
    let grade = 'N/A';
    for (const gradeobj of NewgradeArray) {
      let grade = gradeobj && gradeobj.grade !== null ? gradeobj.grade : 'N/A';
    }
    return {
      ...students,
      grade,
    };
  });
}
// return students_loc.map(obj => NewgradeArray)
