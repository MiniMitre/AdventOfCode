// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the 'html' directory
app.use(express.static("html"));

// Endpoint to read a file based on the day parameter
app.get("/readFile/:day", (req, res) => {
  const day = req.params.day;
  const filename = `day-${day}.txt`; // Assuming your files are named day-1.txt, day-2.txt, etc.
  const filePath = path.resolve(__dirname, "input", filename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err); // Log the error for debugging
      res
        .status(500)
        .send({ error: "Error reading file", details: err.message });
      return;
    }

    res.send(data);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
