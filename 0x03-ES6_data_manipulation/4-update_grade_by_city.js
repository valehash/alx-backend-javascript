// function that returns an array of objects who are located in a specific city.

export default function updateStudentGradeByCity(students, city, NewgradeArray) {
  const StudentsLoc = students.filter((stu) => stu.location === city);
  return StudentsLoc.map((students) => {
    const gradeobj = NewgradeArray.find((StudentsGrade) => StudentsGrade.studentId === students.id);
    return {
      ...students,
      grade: gradeobj ? gradeobj.grade : 'N/A',
    };
  });
}
// return students_loc.map(obj => NewgradeArray)
