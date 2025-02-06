const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./src/routes/login.js");
const cookieParser = require("cookie-parser");
const resumeContent = require("./src/routes/resumeContentRoute.js");

const pdf = require("./src/routes/generatePDF.js");

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://resumake-seven.vercel.app",
    ];

    // Check if the origin is in our allowedOrigins array
    // or if it's undefined (for same-origin requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

require("dotenv").config({ path: ".env" });
const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Success");
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
