require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.JWT_SECRET;
app.use(express.json());
const user = {
  id: 1,
  username: "admin",
  password: "1234"
};
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.json({ token });
  }
  res.status(401).json({ message: "Invalid credentials" });
});
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token required" });
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}
app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome", user: req.user });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});