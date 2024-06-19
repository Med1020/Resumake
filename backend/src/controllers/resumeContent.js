const mongoose = require("mongoose");

const Resume = require("../models/resume.js");
const User = require("../models/user.js");
const modelMap = require("../models/modelMap.js");

const updateResumeContent = async (req, res) => {
  const { resumeId, data } = req.body;
  console.log(resumeId, data);

  const resume = await Resume.findOneAndUpdate({ _id: resumeId }, data, {
    returnOriginal: false,
  });
  if (!resume) {
    console.log("Resume not found");
  }
  console.log(resume);
  res.status(200).send("added content");
};

const updateResumeArrays = async (req, res) => {
  let { resumeId, elementName, data } = req.body;
  let objectId = data._id || data.id;

  // const filter = {
  //   _id: resumeId,
  //   [`${elementName}.$_id`]: objectId,
  // };
  const Model = modelMap[elementName];
  const resume = await Resume.findOne({
    _id: resumeId,
  });

  let existingEntryIndex = resume[elementName].findIndex(
    (entry) => entry._id.valueOf() === objectId
  );

  if (existingEntryIndex > -1) {
    const { _id, ...updateData } = data;
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

  // Construct the update object using $pull
  const update = { $pull: { [`${elementName}`]: { _id: id } } };
  const deletedContent = await Resume.updateOne(query, update);
  console.log(deletedContent);
  res.status(204);
};

const getAllResumes = async (req, res) => {
  const userId = req.userId;
  // const user = await User.findById(userId);
  const resume = await Resume.find({ userId: userId });
  // console.log(resume);
  if (!resume) {
    res.status(404).send("Resume not found");
  }

  res.status(200).send(resume);
};

const createNewResume = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).send("User not found");
    }
    if (user.resumes.length > 5) {
      res.status(500).send("Cannot create more than 5 resumes sorri");
    }
    const newResume = await new Resume({ userId }).save();
    user.resumes.push(newResume);
    await user.save();
    res
      .status(201)
      .json({ message: "Resume created", resumeId: newResume._id });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getOneResume = async (req, res) => {
  try {
    const userId = req.userId;
    const resumeId = req.params.resumeId;
    console.log(resumeId);
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).send("User not found");
    }

    const resume = await Resume.findById(resumeId);
    console.log(resume);
    res.status(200).json({ message: "Returning resume", resume });
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
};
