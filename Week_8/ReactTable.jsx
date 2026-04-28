import React from "react";
function ReactTable(){
    const Students=[
    { id: 1, name: "Siddhu", course: "React", age: 21 },
    { id: 2, name: "Rahul", course: "JavaScript", age: 22 },
    { id: 3, name: "Priya", course: "HTML", age: 20 },
    { id: 4, name: "Anu", course: "CSS", age: 23 },
    ];
    return(
        <div style={{padding:"40px"}}>
            <h2>Student Table</h2>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>course</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((stu)=>(
                        <tr key={stu.id}> 
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.course}</td>
                            <td>{stu.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default ReactTable;