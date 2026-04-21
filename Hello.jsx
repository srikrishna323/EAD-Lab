import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    if (score <= 1) {
      setStrength("Weak");
    } else if (score === 2 || score === 3) {
      setStrength("Medium");
    } else if (score === 4) {
      setStrength("Strong");
    }
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px" }}
      />
      <p>
        Strength:{" "}
        <span
          style={{
            color:
              strength === "Weak"
                ? "red"
                : strength === "Medium"
                ? "orange"
                : "green",
            fontWeight: "bold",
          }}
        >
          {strength}
        </span>
      </p>
    </div>
  );
}

export default PasswordChecker;