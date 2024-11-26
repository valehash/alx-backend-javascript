const fs = require('fs');


function countStudents(path) {
	if (!path) {
		throw new error("Cannot load the database");
		return; 
	}  
	try {
		let ArrayofCS = [];
		let ArrayofSWE = [];
		 
    	const data = fs.readFileSync(path, 'utf-8');
    	let lines = data.split('\n').filter((line) => line.trim() !== '');
    	lines = lines.slice(1,);
    	for (const row of lines){
				values =  row.split(',')
				
				if (values[3] === 'CS'){
					ArrayofCS.push(values)
			}
				if (values[3] === 'SWE'){
					ArrayofSWE.push(values)
			}
		}
		const total_number = lines.length;
		const cs_list = ArrayofCS.map(student => student[0]);
		const swe_list= ArrayofSWE.map(student => student[0]);
		const cs_listf = cs_list.map(name => `${name}`);
		const swe_listf = swe_list.map(name => `${name}`);
		console.log(`Number of students: ${total_number}`);
		console.log(`Number of students in CS: ${ArrayofCS.length}. List: ${cs_listf}`);
		console.log(`Number of students in SWE: ${ArrayofSWE.length}. List: ${swe_listf}`);
   	}
	catch(error){
		throw new error("Cannot load the database");
	}
}
module.exports = countStudents;
