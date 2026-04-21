import React, { useState } from "react";

function StudentTable() {
  // 📊 Only 5 Students
  const studentsData = [
    { id: 1, name: "Sri Krishna", branch: "CSE", year: "3rd" },
    { id: 2, name: "Rahul", branch: "ECE", year: "2nd" },
    { id: 3, name: "Anjali", branch: "IT", year: "4th" },
    { id: 4, name: "Kiran", branch: "EEE", year: "1st" },
    { id: 5, name: "Pooja", branch: "CSE", year: "2nd" }
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  // 🔍 Search Filter
  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // 📄 Pagination
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentRecords = filteredStudents.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Table</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      {/* 📊 Table */}
      <table border="1" style={{ margin: "20px auto", width: "60%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 📄 Pagination */}
      <div>
        <button disabled>Previous</button>
        <span> Page 1 of 1 </span>
        <button disabled>Next</button>
      </div>
    </div>
  );
}

export default StudentTable;