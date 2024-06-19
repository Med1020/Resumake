const jwt = require("jsonwebtoken");

const decodeToken = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = decodeToken;
