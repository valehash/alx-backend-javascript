const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file contents into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ensure the file is not empty and has more than just the header
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Parse the file header and data rows
    const students = lines.slice(1); // Remove the header line
    const studentCount = students.length;

    console.log(`Number of students: ${studentCount}`);

    // Create an object to group students by field
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    // Log the number of students per field and their names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // If the file cannot be read, throw an error with a specific message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
