const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/login.js");
const cookieParser = require("cookie-parser");
const resumeContent = require("./src/controllers/resumeContent.js");

const pdf = require("./src/routes/generatePDF.js");

require("dotenv").config({ path: ".env" });
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.end();
});
app.use("/api", userRouter);
app.use("/generate-pdf", pdf);
app.use("/api/resumeContent", resumeContent);

mongoose
  .connect(process.env.MongoDBURL)
  .then(() => {
    console.log("App is connected to db");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
