const router = require("express").Router();
const decodeToken = require("../middlewares/auth/decodeToken.js");

const {
  updateResumeContent,
  getAllResumes,
  createNewResume,
  getOneResume,
  updateResumeArrays,
  deleteResumeContent,
  deleteResume,
} = require("../controllers/resumeContent.js");

router.post("/", decodeToken, updateResumeContent);
router.get("/getResumes", decodeToken, getAllResumes);
router.post("/createNewResume", decodeToken, createNewResume);
router.get("/getResume/:resumeId", decodeToken, getOneResume);
router.post("/postResumeContent", decodeToken, updateResumeArrays);
router.delete("/remove", decodeToken, deleteResumeContent);
router.delete("/deleteResume", decodeToken, deleteResume);

module.exports = router;
