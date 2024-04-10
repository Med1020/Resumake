// auth.routes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.jsx");

// Route for user login
router
  .post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid password" });
      }
      const token = jwt.sign({ userId: user._id }, "secretKey", {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true });
      return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
  .post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        res.status(409).json({ message: "User already exists" });
      }
      const hashedPassword = await bycrypt.hash(password, 10);

      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

module.exports = router;
