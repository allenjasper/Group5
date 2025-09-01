# Save the organized README.md content into a file

readme_content = """# 📘 Student Information Management System (SIMS)

## 📖 Project Description
The **Student Information Management System (SIMS)** is a simple web-based tool built with **HTML, CSS, and JavaScript**.  

It allows users to:
- Add a new student name to the list  
- Remove the last student from the list  
- Display all students  
- Show the total count of students  
- Show a student at a specific position (using `.at()`)  
- Join all student names into a single string (using `.join()`)  

This system demonstrates **JavaScript array methods** (`push()`, `pop()`, `length`, `at()`, `join()`) as required in the assessment task.  

---

## ⚙️ How to Run
1. Download or clone the project folder.  
2. Ensure all three files are in the same directory:  
   - `index.html`  
   - `styles.css`  
   - `app.js`  
3. Open **index.html** in a browser (Chrome, Edge, or Firefox).  
4. Use the input field and buttons to manage the student list.  

---

## 🧪 Features to Test
- **Add Student** → Type a name and click *Add Student*.  
- **Remove Last Student** → Removes the last added student.  
- **Display All Students** → Shows the full list in the result area.  
- **Show Student Count** → Displays the total number of students.  
- **Show Student at Position** → Enter a position (1,2,3…) to see that student.  
- **Join Student Names** → Joins all student names into one line separated by commas.  
- **Seed Example Students** → Quickly loads 3 sample names.  
- **Clear All Students** → Empties the list.  

---

## 👥 Group Members

### **HTML Team**
- Aidalla — Base Structure (HTML setup)  
- Bantugon — Form & Controls  
- Consuelo — Documentation (README, rubric check)  

### **CSS Team**
- Abaquita — Layout & Grid  
- Barayang — Styling & Theme  
- Garganera — QA & Accessibility  

### **JavaScript Team**
- Ararao — Core Functions (`addStudent`, `removeStudent`)  
- Angeles — Array Methods (`displayStudents`, `showCount`, `showStudentAt`)  
- Peñaflor — Enhancements (`joinStudentNames`, `seedExample`, `clearAll`)  

---

## 📊 Function–Member Mapping

| **Function**        | **Description** | **Array Method / Feature** | **Responsible Member** |
|----------------------|-----------------|-----------------------------|--------------------------|
| `addStudent()`       | Adds a new student to the list | `push()` | Ararao |
| `removeStudent()`    | Removes the last student | `pop()` | Ararao |
| `displayStudents()`  | Displays all students with numbering | `.map()`, `.join()` | Angeles |
| `showCount()`        | Shows total number of students | `.length` | Angeles |
| `showStudentAt()`    | Displays student at a specific position | `.at()` | Angeles |
| `joinStudentNames()` | Joins all student names into one string | `.join()` | Peñaflor |
| `renderList()`       | Updates live `<ol>` list in UI | DOM Manipulation | Shared |
| `showMessage()`      | Shows messages in result area | DOM Manipulation | Shared |
| `seedExample()`      | Adds 3 sample students for demo | `push()` | Peñaflor |
| `clearAll()`         | Clears the entire student list | Array reset | Peñaflor |

---

## 💻 Code Explanations

### 1. `addStudent()`
- Gets the name from the input field `#studentName`.  
- If empty, shows an error.  
- Adds the student to the array using **`push()`**.  
- Updates the result message and refreshes the live list.  
- Clears the input box and resets focus.  

### 2. `removeStudent()`
- Removes the **last student** using **`pop()`**.  
- Displays the removed student’s name.  
- If the list is empty, shows a warning message.  

### 3. `displayStudents()`
- Displays all students with numbering.  
- Uses `.map()` to format each student as `1. Name`.  
- Joins them with line breaks (`\\n`) for readability.  

### 4. `showCount()`
- Displays the **total number** of students.  
- Uses `.length` property.  

### 5. `showStudentAt()`
- Accepts a position number from `#positionInput`.  
- Validates the input (must be a valid positive integer).  
- Uses `.at()` to get the student at that position.  
- Shows the result or an error if out of range.  

### 6. `joinStudentNames()`
- Combines all student names into one string.  
- Uses `.join(', ')`.  
- Example: `Allen, Kyo, Hans`.  

### 7. `renderList()`
- Updates the **live list** (`<ol>`).  
- Clears the old list, loops over students, and creates `<li>` elements.  

### 8. `showMessage(msg)`
- Displays messages in the result area (`#result`).  
- Also logs the message to the console for debugging.  

### 9. `seedExample()`
- Preloads 3 example students (`Allen Ararao`, `Kyo Abaquita`, `Hans Consuelo`).  
- Useful for quick testing.  

### 10. `clearAll()`
- Empties the entire `students` array.  
- Updates the result message and clears the live list.  

---

## 🔗 Event Listeners
- Each button in `index.html` is linked to its function:  
  - **Add Student** → `addStudent()`  
  - **Remove Student** → `removeStudent()`  
  - **Display All Students** → `displayStudents()`  
  - **Show Count** → `showCount()`  
  - **Show Student at Position** → `showStudentAt()`  
  - **Join Names** → `joinStudentNames()`  
  - **Seed Example Students** → `seedExample()`  
  - **Clear All Students** → `clearAll()`  
- Pressing **Enter** inside the input field also runs `addStudent()`.  


