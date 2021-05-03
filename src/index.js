// using CommonJS import
const express = require("express");
const app = express();

const PORT = 3000;

// GET request on root
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.send("Hello user");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
