import React from "react";
import { useState } from "react";

function App(){
  const [password,setPassword]=useState("");
  const [strength,setStrength]=useState("");
  
  const StrengthCheck = (pwd) =>{
    let score=0;
    if(pwd.length>=8) score++;
    if(/[A-Z]/.test(pwd)) score++;
    if(/[a-z]/.test(pwd)) score++;
    if(/[^A-Za-z0-9]/.test(pwd)) score++;

    if(pwd.length===0){
      setStrength('')
    }else if(score<=2){
      setStrength('weak');
    }else if(score<=3){
      setStrength('medium');
    }else{
      setStrength('Strong');
    }
  };
  const handleChange = (e)=>{
    const newPassword=e.target.value;
    setPassword(newPassword);
    StrengthCheck(newPassword);
  };
  return(
    <div>
        <h2>PassWord Strength Checker</h2>
        <input 
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handleChange}
      />
      <p>{strength}</p>
    </div>
  );

}
export default App;