📘 README.md
Student Information Management System (SIMS)
📖 Project Description

This project is a simple Student Information Management System (SIMS) built with HTML, CSS, and JavaScript. It allows users to:

Add a new student name to the list.

Remove the last student from the list.

Display all students.

Show the total count of students.

Show a student at a specific position (using at()).

Join all student names into a single string (using join()).

The system demonstrates JavaScript array methods (push(), pop(), length, at(), join()) as required in the assessment task.

⚙️ How to Run

Download or clone the project folder.

Ensure all three files are in the same directory:

index.html

styles.css

app.js

Open index.html in a browser (Chrome, Edge, or Firefox).

Use the input and buttons to manage the student list.

🧪 Features to Test

Add Student: Type a name and click Add Student.

Remove Last Student: Removes the last added student.

Display All Students: Shows the full list in the result area.

Show Student Count: Displays the total number of students.

Show Student at Position: Input a position (1,2,3…) and display that student.

Join Student Names: Joins all student names into one line separated by commas.

Seed & Clear Buttons: For quick demo/testing.

👥 Group Members
HTML 

Aidalla — HTML Lead (base structure)

Bantugon — Form & Controls

Consuelo — Documentation (README, rubric check)

CSS 

Abaquita — Layout & Grid

Barayang — Styling & Theme

Garganera — QA & Accessibility

JavaScript Team

Ararao — Core Functions (addStudent, removeStudent)

Angeles — Array Methods (displayStudents, showCount, showStudentAt)


Penaflor — Enhancements (joinStudentNames, seedExample, clearAll)

**Code explanations

1. addStudent()
   function addStudent() {
  const name = (elName.value || '').trim();
  if (!name) return showMessage('Please enter a student name before adding.');
  students.push(name);
  showMessage(`Added: "${name}"`);
  renderList();
  elName.value = '';
  elName.focus();
}
Gets the name from the input field (#studentName).
Checks if the input is empty; if yes, shows an error message.
Adds the student name to the students array.
Updates the result message and refreshes the live student list using renderList().
Clears the input box and puts the cursor back for quick entry.

2. removeStudent()
   function removeStudent() {
  if (students.length === 0) return showMessage('List is already empty.');
  const removed = students.pop();
  showMessage(`Removed last student: "${removed}"`);
  renderList();
}
Removes the last student in the students array using .pop().
Shows which student was removed.
If the list is empty, it shows a message instead.
Refreshes the live student list.

3. displayStudents()
   function displayStudents() {
  if (students.length === 0) return showMessage('No students to display.');
  const content = students.map((s, i) => `${i+1}. ${s}`).join('\n');
  showMessage('Students:\n' + content);
  renderList();
}
Shows all students in the list with numbering.
Uses .map() to format 1. Name, 2. Name, etc.
Joins them with line breaks (\n) so they display neatly in the result area.
Calls renderList() to refresh the right-side live list.

4. showCount()
   function showCount() {
  showMessage(`Total students: ${students.length}`);
  renderList();
}
Displays the total number of students currently in the list.
Uses students.length to count.

5. showStudentAt()
   function showStudentAt() {
  const raw = elPos.value;
  const pos = Number(raw);
  if (!raw || Number.isNaN(pos) || pos < 1 || !Number.isInteger(pos))
    return showMessage('Enter a valid position (1,2,3...).');
  const idx = pos - 1;
  if (idx < 0 || idx >= students.length)
    return showMessage(`Position ${pos} is out of range. Total: ${students.length}`);
  const name = students.at(idx);
  showMessage(`Student at position ${pos}: "${name}"`);
  renderList();
}
Lets the user enter a position number (1-based) in the input field (#positionInput).
Validates that the input is a proper number and within range.
Finds the student at that position using .at(index).
Displays the student’s name or an error if the position is invalid.

6. joinStudentNames()
   function joinStudentNames() {
  if (students.length === 0) return showMessage('No students to join.');
  const joined = students.join(', ');
  showMessage('Joined names:\n' + joined);
  renderList();
}
Combines all student names into one string separated by commas.
Example: Allen, Kyo, Hans.
Displays it in the result area.

  7. renderList()
     function renderList() {
  elList.innerHTML = '';
  students.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = s;
    elList.appendChild(li);
  });
}

Updates the live student list (#studentList).
Clears the old list, then loops over all students.
Creates <li> elements for each student and adds them to the list.

8. showMessage(msg)
   function showMessage(msg) {
  elResult.textContent = msg;
  console.log('[SIMS]', msg);
}
function showMessage(msg) {
  elResult.textContent = msg;
  console.log('[SIMS]', msg);
}
Displays a message in the result area (#result).
Also logs the same message to the browser console for debugging.


9. seedExample()
    function seedExample() {
  students.push('Allen Ararao', 'Kyo Abaquita', 'Hans Consuelo');
  showMessage('Seeded 3 example students.');
  renderList();
}
Pre-loads the system with three example student names.
Helps in quickly testing the system without manual input.


10. clearAll()
    function clearAll() {
  students.length = 0;
  showMessage('Cleared all students.');
  renderList();
}
Clears the entire students array.
Displays a confirmation message.
Refreshes the live list to show it’s empty.


🔗 Event Listeners
document.getElementById('btnAdd').addEventListener('click', addStudent);
document.getElementById('btnRemove').addEventListener('click', removeStudent);
document.getElementById('btnDisplay').addEventListener('click', displayStudents);
document.getElementById('btnCount').addEventListener('click', showCount);
document.getElementById('btnAt').addEventListener('click', showStudentAt);
document.getElementById('btnJoin').addEventListener('click', joinStudentNames);
document.getElementById('seed').addEventListener('click', seedExample);
document.getElementById('clear').addEventListener('click', clearAll);

elName.addEventListener('keydown', (e) => { if (e.key === 'Enter') addStudent(); });

Connects HTML buttons (from index.html) to each function.
Example: Clicking “Add Student” runs addStudent().
Also allows pressing Enter key in the input field to quickly add a student.
