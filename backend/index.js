const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/login.jsx");
const { MongoDBURL, PORT } = require("./src/config/db.js");
const User = require("./models/user.jsx");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.end();
});
app.use("/api", userRouter);

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("App is connected to db");
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
