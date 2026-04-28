const fs = require("fs");
fs.writeFileSync("data.txt", "Name: Sri Krishna\nBranch: CSE\nYear: 3rd\n");
console.log("File created and data written");
const data = fs.readFileSync("data.txt", "utf8");
console.log("\nFile Content:\n", data);
fs.appendFile("data.txt", "Marks: 85\n", (err) => {
  if (err) throw err;
  console.log("\nData appended successfully");
  fs.readFile("data.txt", "utf8", (err, updatedData) => {
    if (err) throw err;
    console.log("\nUpdated File Content:\n", updatedData);
  });
});