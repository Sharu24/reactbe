const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const app = express();

require("./dbConnect");

const PORT = process.env.PORT || 3000;

app.use(express.json());

const User = require("./models/User");

app.get("/", (req, res) => {
  res.send("Home Get Route");
});

app.post(
  "/",
  [
    body("firstName", "First Name is required").notEmpty(),
    body("lastName", "Last Name is required").notEmpty(),
    body("password", "Password is required").notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ Errors: errors.array() });
    }
    try {
      const userData = new User(req.body);
      const saltRounds = 10;
      userData.password = bcrypt.hashSync(req.body.password, saltRounds);
      await userData.save();
      res.status(200).json({ Success: "User Created Successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: "failed to create" });
    }
  }
);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
