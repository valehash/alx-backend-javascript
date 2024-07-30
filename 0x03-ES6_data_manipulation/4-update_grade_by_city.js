// function that returns an array of objects who are located in a specific city.

export default function updateStudentGradeByCity(students, city, NewgradeArray) {
  const StudentsLoc = students.filter((stu) => stu.location === city);
  return StudentsLoc.map((students) => {
    let grade = 'N/A';
    for (const gradeobj of NewgradeArray) {
      if (gradeobj.StudentId === StudentsLoc.id) {
        grade = gradeobj.grade;
        break;
      }
    }
    return {
      ...students,
      grade,
    };
  });
}
// return students_loc.map(obj => NewgradeArray)
