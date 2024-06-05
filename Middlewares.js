const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

app.use((req, res, next) => {
  console.info("Middleware 1");
  req.userName = "Harsh";
  next();
});
app.use((req, res, next) => {
  console.info("Middleware 2");
  next();
});
app.get("/users", (req, res) => {
  console.info(req.userName);
  return res.json(users);
});

app.listen(3000, () => {
  console.log("Listening");
});
