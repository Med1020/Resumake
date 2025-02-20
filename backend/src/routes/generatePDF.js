const decodeToken = require("../middlewares/auth/decodeToken.js");
const { downloadPdf } = require("../controllers/downloadPdf.js");
const express = require("express");

const router = express.Router();

router.get("/:resumeId", decodeToken, downloadPdf);

module.exports = router;
