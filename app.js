// === Student Information Management System ===

// Store all student names
const studentList = [];

// DOM elements
const studentNameInput = document.getElementById('studentName');
const positionInput = document.getElementById('positionInput');
const resultOutput = document.getElementById('result');
const studentListDisplay = document.getElementById('studentList');

// Add a new student to the list
function addStudent() {
  const name = studentNameInput.value.trim();
  if (!name) {
    showMessage('Please enter a student name.');
    return;
  }
  
  studentList.push(name);
  showMessage(`Added student: ${name}`);
  updateListDisplay();
  studentNameInput.value = '';
  studentNameInput.focus();
}

// Remove the last student from the list
function removeLastStudent() {
  if (studentList.length === 0) {
    showMessage('No students to remove.');
    return;
  }
  
  const removedStudent = studentList.pop();
  showMessage(`Removed: ${removedStudent}`);
  updateListDisplay();
}

// Display all students with numbering
function showAllStudents() {
  if (studentList.length === 0) {
    showMessage('No students to show.');
    return;
  }
  
  const formattedList = studentList
    .map((student, index) => `${index + 1}. ${student}`)
    .join('\n');
  showMessage(`Students:\n${formattedList}`);
  updateListDisplay();
}

// Show total number of students
function showStudentCount() {
  showMessage(`Total students: ${studentList.length}`);
  updateListDisplay();
}

// Show student at specific position
function showStudentAtPosition() {
  const position = Number(positionInput.value);
  
  if (!positionInput.value || isNaN(position) || position < 1 || !Number.isInteger(position)) {
    showMessage('Please enter a valid position (1, 2, 3...).');
    return;
  }
  
  const index = position - 1;
  if (index < 0 || index >= studentList.length) {
    showMessage(`Position ${position} is invalid. Total students: ${studentList.length}`);
    return;
  }
  
  const student = studentList[index];
  showMessage(`Student at position ${position}: ${student}`);
  updateListDisplay();
}

// Join all student names with commas
function joinStudentNames() {
  if (studentList.length === 0) {
    showMessage('No students to join.');
    return;
  }
  
  const joinedNames = studentList.join(', ');
  showMessage(`All students: ${joinedNames}`);
  updateListDisplay();
}

// Update the displayed student list
function updateListDisplay() {
  studentListDisplay.innerHTML = '';
  studentList.forEach(student => {
    const listItem = document.createElement('li');
    listItem.textContent = student;
    studentListDisplay.appendChild(listItem);
  });
}

// Display messages in the result area
function showMessage(message) {
  resultOutput.textContent = message;
  console.log('[Student System]', message);
}

// Add example students
function addSampleStudents() {
  const sampleStudents = [
    'Allen Ararao',
    'Kyo Abaquita',
    'Hans Consuelo',
    'Harvy Penaflor',
    'Charles Angeles',
    'Crystal Barayang',
    'Patrick Aidalla',
    'Jay Louis Bantugon',
    'Mary Ann Garganera'
  ];
  
  studentList.push(...sampleStudents);
  showMessage(`Added ${sampleStudents.length} sample students.`);
  updateListDisplay();
}

// Clear all students
function clearAllStudents() {
  studentList.length = 0;
  showMessage('All students cleared.');
  updateListDisplay();
}

// Add event listeners for buttons
document.getElementById('btnAdd').addEventListener('click', addStudent);
document.getElementById('btnRemove').addEventListener('click', removeLastStudent);
document.getElementById('btnDisplay').addEventListener('click', showAllStudents);
document.getElementById('btnCount').addEventListener('click', showStudentCount);
document.getElementById('btnAt').addEventListener('click', showStudentAtPosition);
document.getElementById('btnJoin').addEventListener('click', joinStudentNames);
document.getElementById('seed').addEventListener('click', addSampleStudents);
document.getElementById('clear').addEventListener('click', clearAllStudents);

// Allow adding student with Enter key
studentNameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addStudent();
  }
});