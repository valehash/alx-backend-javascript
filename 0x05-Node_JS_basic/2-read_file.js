const fs = require('fs');


function countStudents(path) {
	if (!path) {
		console.log("Cannot load the database");
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
		const cs_list = ArrayofCS.map(student => student[0]);
		const swe_list= ArrayofSWE.map(student => student[0]);
		console.log(`Number of students in CS: ${ArrayofCS.length}. List: ${cs_list}`)
		console.log(`Number of students in SWE: ${ArrayofSWE.length}. List: ${swe_list}`) 
		const total_number = lines.length
		
		console.log(`Number of students: ${total_number}`);
   	}
	catch(error){
		console.log(error);
	}
}
module.exports = countStudents;
