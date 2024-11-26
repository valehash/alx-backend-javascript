const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const csStudents = [];
    const sweStudents = [];

    for (const studentData of students) {
      const [firstName,,, field] = studentData.split(',');

      if (field === 'CS') {
        csStudents.push(firstName);
      } else if (field === 'SWE') {
        sweStudents.push(firstName);
      }
    }

    const totalStudents = lines.length - 1;
    const formattedCsStudents = csStudents.map((name) => ` ${name}`);
    const formattedSweStudents = sweStudents.map((name) => ` ${name}`);

    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${formattedCsStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${formattedSweStudents.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
