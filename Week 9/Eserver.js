const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log("---------------------------");
  next(); 
});
app.use(express.static(path.join(__dirname, "public")));
app.get("/home", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1><p>Please enter your credentials</p>");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});