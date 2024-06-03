const express = require("express");
const puppeteer = require("puppeteer");
const router = express.Router();

router.post("/", async (req, res) => {
  // const resumeData = req.body;
  // console.log(resumeData);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:5173/resume/download", {
    waitUntil: "networkidle0",
  });
  // await page.setContent(`<body>${resumeData}</body>`);
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
});

module.exports = router;
