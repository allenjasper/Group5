// === Student Information Management System (SIMS) ===

// students array (single source of truth)
const students = [];

// UI elements
const elName = document.getElementById('studentName');
const elPos = document.getElementById('positionInput');
const elResult = document.getElementById('result');
const elList = document.getElementById('studentList');

// 1) addStudent
function addStudent() {
  const name = (elName.value || '').trim();
  if (!name) return showMessage('Please enter a student name before adding.');
  students.push(name);
  showMessage(`Added: "${name}"`);
  renderList();
  elName.value = '';
  elName.focus();
}

// 2) removeStudent
function removeStudent() {
  if (students.length === 0) return showMessage('List is already empty.');
  const removed = students.pop();
  showMessage(`Removed last student: "${removed}"`);
  renderList();
}

// 3) displayStudents
function displayStudents() {
  if (students.length === 0) return showMessage('No students to display.');
  const content = students.map((s, i) => `${i+1}. ${s}`).join('\n');
  showMessage('Students:\n' + content);
  renderList();
}

// 4) showCount
function showCount() {
  showMessage(`Total students: ${students.length}`);
  renderList();
}

// 5) showStudentAt
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

// 6) joinStudentNames
function joinStudentNames() {
  if (students.length === 0) return showMessage('No students to join.');
  const joined = students.join(', ');
  showMessage('Joined names:\n' + joined);
  renderList();
}

// Helpers
function renderList() {
  elList.innerHTML = '';
  students.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = s;
    elList.appendChild(li);
  });
}
function showMessage(msg) {
  elResult.textContent = msg;
  console.log('[SIMS]', msg);
}
function seedExample() {
  students.push('Allen Ararao', 'Kyo Abaquita', 'Hans Consuelo');
  showMessage('Seeded 3 example students.');
  renderList();
}
function clearAll() {
  students.length = 0;
  showMessage('Cleared all students.');
  renderList();
}

// Event listeners
document.getElementById('btnAdd').addEventListener('click', addStudent);
document.getElementById('btnRemove').addEventListener('click', removeStudent);
document.getElementById('btnDisplay').addEventListener('click', displayStudents);
document.getElementById('btnCount').addEventListener('click', showCount);
document.getElementById('btnAt').addEventListener('click', showStudentAt);
document.getElementById('btnJoin').addEventListener('click', joinStudentNames);
document.getElementById('seed').addEventListener('click', seedExample);
document.getElementById('clear').addEventListener('click', clearAll);

// Enter key support
elName.addEventListener('keydown', (e) => { if (e.key === 'Enter') addStudent(); });
