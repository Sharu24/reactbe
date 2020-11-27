const express = require("express");
const app = express();

require("./dbConnect");

const port = process.env.PORT || 3000;

app.use(express.json());

const User = require("./models/User");

app.get("/", (req, res) => {
  res.send("Home Get Route");
});

app.post("/", async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(200).json({ Success: "User Created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "failed to create" });
  }
});

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
