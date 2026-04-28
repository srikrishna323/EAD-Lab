import { useState } from "react";

function Pagination() {
  const [currentpage, setCurrentpage] = useState(1);

  const students = [
    { id: 1, name: "Krishna", course: "React", age: 21 },
    { id: 2, name: "Rahul", course: "JavaScript", age: 22 },
    { id: 3, name: "Priya", course: "HTML", age: 20 },
    { id: 4, name: "Anu", course: "CSS", age: 23 },
    { id: 5, name: "Kiran", course: "Node.js", age: 24 },
    { id: 6, name: "Ravi", course: "MongoDB", age: 22 },
    { id: 7, name: "Sneha", course: "React", age: 21 },
    { id: 8, name: "Arjun", course: "Express", age: 25 },
    { id: 9, name: "Meena", course: "Python", age: 20 },
    { id: 10, name: "Vikram", course: "Java", age: 23 },
  ];

  const recordsperpage = 3;

  const lastindex = currentpage * recordsperpage;
  const firstindex = lastindex - recordsperpage;

  const currentrecords = students.slice(firstindex, lastindex);

  const totalpages = Math.ceil(students.length / recordsperpage);

  const goToPrevpage = () => {
    if (currentpage > 1) {
      setCurrentpage(currentpage - 1);
    }
  };

  const goToNextpage = () => {
    if (currentpage < totalpages) {
      setCurrentpage(currentpage + 1);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Pagination Example</h1>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {currentrecords.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ margin: "20px" }}>
        <button onClick={goToPrevpage} disabled={currentpage === 1}>
          Previous
        </button>

        <span style={{ margin: "0 15px" }}>
          Page {currentpage} of {totalpages}
        </span>

        <button onClick={goToNextpage} disabled={currentpage === totalpages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
