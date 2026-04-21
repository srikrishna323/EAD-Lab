import React from "react";
import StudentCard from "./components/StudentCard";

function App2() {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      
      <StudentCard
        name="Sri Krishna"
        branch="CSE"
        year="3rd Year"
        image="https://via.placeholder.com/100"
      />

      <StudentCard
        name="Balraj"
        branch="ECE"
        year="2nd Year"
        image="https://via.placeholder.com/100"
      />

      <StudentCard
        name="Vishnu"
        branch="IT"
        year="4th Year"
        image="https://via.placeholder.com/100"
      />

    </div>
  );
}

export default App2;