const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
let students = [
  { id: 1, name: "Sri Krishna", branch: "CSE" },
  { id: 2, name: "Rahul", branch: "ECE" }
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    branch: req.body.branch
  };
  students.push(newStudent);
  res.json({
    message: "Student added successfully",
    student: newStudent
  });
});
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) {
    student.name = req.body.name || student.name;
    student.branch = req.body.branch || student.branch;
    res.json({
      message: "Student updated successfully",
      student
    });
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: "Student deleted successfully" });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});