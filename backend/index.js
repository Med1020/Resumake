const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/login.jsx");
const User = require("./models/user.jsx");
const bcrypt = require("bcrypt");
const pdf = require("./routes/generatePDF.jsx");
require("dotenv").config({ path: `${__dirname}/.env` });

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.end();
});
app.use("/api", userRouter);
app.use("/generate-pdf", pdf);

mongoose
  .connect(process.env.MongoDBURL)
  .then(() => {
    console.log("App is connected to db");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
