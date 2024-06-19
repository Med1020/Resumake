// modelMap.js
const Experience = require("./experience");
const Education = require("./education");
const Project = require("./project");
const Skill = require("./skill");
const Certificate = require("./certificate");
const Course = require("./course");
const Award = require("./award");

const modelMap = {
  experience: Experience,
  education: Education,
  project: Project,
  skill: Skill,
  certificate: Certificate,
  course: Course,
  award: Award,
};

module.exports = modelMap;
