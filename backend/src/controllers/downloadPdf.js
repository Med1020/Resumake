const puppeteer = require("puppeteer");

const downloadPdf = async (req, res) => {
  // const resumeData = req.body;
  const resumeId = req.params.resumeId;
  const cookie = req.cookies.token;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setCookie({
    name: "token",
    value: cookie,
    domain: "localhost",
    path: "/",
    httpOnly: true,
    secure: true,
  });
  await page.goto(`http://localhost:5173/resume/download/${resumeId}`);

  await page.waitForNavigation({
    waitUntil: "networkidle0",
  });

  // await page.waitForNetworkIdle({ idleTime: 20000 });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="resume-${resumeId}.pdf"`
  );
  const pdfBuffer = await page.pdf({
    format: "A4", // Paper format
    printBackground: true,
  });
  await browser.close();

  res.setHeader("Content-Type", "application/pdf");
  res.send(pdfBuffer);
};

module.exports = { downloadPdf };
