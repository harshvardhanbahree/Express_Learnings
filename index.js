const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 3000;
const fs = require("fs");
//middleware
app.use(express.urlencoded({ extended: false }));

app.get("/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    res.json({ status: "Pending" });
  });

app.post("/api/users", (req, res) => {
  users.push({ ...req.body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Success", id: users.length });
  });
});
app.listen(port, () => {
  console.info("server is listening");
});
