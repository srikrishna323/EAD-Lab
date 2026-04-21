import React from "react";

function StudentCard(props) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "15px",
      borderRadius: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <img 
        src={props.image} 
        alt="student" 
        width="100" 
        height="100"
        style={{ borderRadius: "50%" }}
      />

      <h3>{props.name}</h3>
      <p>Branch: {props.branch}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentCard;