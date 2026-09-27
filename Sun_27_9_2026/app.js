
import calculateAverage from './grades.js';


import { studentsList, getPassStatus } from './students.js';


const container = document.getElementById('app-container');

studentsList.forEach(student => {
    const avg = calculateAverage(student.grades);
    const status = getPassStatus(avg);
    
    const studentCard = `
    ${student.name},
Average: ${avg},

Status: ${status}`


});
container.innerHTML += studentCard;