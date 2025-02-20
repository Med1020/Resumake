const mongoose = require("mongoose");

const Resume = require("../models/resume.js");
const User = require("../models/user.js");
const modelMap = require("../models/modelMap.js");

const updateResumeContent = async (req, res) => {
  const { resumeId, data } = req.body;

  const resume = await Resume.findOneAndUpdate({ _id: resumeId }, data, {
    returnOriginal: false,
  });
  if (!resume) {
    console.log("Resume not found");
  }
  // console.log(resume);
  res.status(200).send("added content");
};

const updateResumeArrays = async (req, res) => {
  let { resumeId, elementName, data } = req.body;
  let objectId = data.id;

  // const filter = {
  //   _id: resumeId,
  //   [`${elementName}.$_id`]: objectId,
  // };
  const Model = modelMap[elementName];
  const resume = await Resume.findOne({
    _id: resumeId,
  });

  let existingEntryIndex = resume[elementName].findIndex(
    (entry) => entry.id.valueOf() === objectId
  );

  if (existingEntryIndex > -1) {
    const { _id, id, ...updateData } = data;
    resume[elementName][existingEntryIndex] = {
      ...resume[elementName][existingEntryIndex]._doc,
      ...updateData,
    };
  } else {
    resume[elementName].push(new Model(data));
  }
  await resume.save();
  // console.log(resume);
  res.status(200).send("added");
};

const deleteResumeContent = async (req, res) => {
  const { resumeId, elementName, id } = req.body;
  const query = { _id: resumeId };

  console.log(elementName, id);
  // Construct the update object using $pull
  const update = { $pull: { [`${elementName}`]: { id: id } } };
  const deletedContent = await Resume.updateOne(query, update);
  res.status(204);
};

const getAllResumes = async (req, res) => {
  const userId = req.userId;
  // const user = await User.findById(userId);
  const resume = await Resume.find({ userId: userId });

  if (!resume) {
    res.status(404).send("Resume not found");
  }

  res.status(200).send(resume);
};

const createNewResume = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    // console.log(user.resumes);
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (user.resumes.length > 5) {
      return res.status(500).send("Cannot create more than 5 resumes sorri");
    }
    const newResume = await new Resume({ userId }).save();
    user.resumes.push(newResume);
    await user.save();
    return res
      .status(201)
      .json({ message: "Resume created", resumeId: newResume._id });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

const getOneResume = async (req, res) => {
  try {
    const userId = req.userId;
    const resumeId = req.params.resumeId;

    const user = await User.findById(userId);

    if (!user) {
      res.status(404).send("User not found");
    }

    const resume = await Resume.findById(resumeId);
    res.status(200).json({ resume });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const deleteResume = async (req, res) => {
  const userId = req.userId;
  try {
    const { resumeId } = req.body;
    const deletedResume = await Resume.deleteOne({ _id: resumeId });
    await User.updateOne({ _id: userId }, { $pull: { resumes: resumeId } });
    // console.log(deletedResume);
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
module.exports = {
  updateResumeContent,
  getAllResumes,
  createNewResume,
  getOneResume,
  updateResumeArrays,
  deleteResumeContent,
  deleteResume,
};
