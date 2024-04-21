import React from "react";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import Harvard from "../Format/Harvard";
import { useSelector } from "react-redux";

const { fullName } = useSelector((state) => state.userDetails);

const DownloadPDF = () => {
  return (
    <PDFDownloadLink
      document={<Harvard />}
      fileName={`${fullName}_Resume.pdf`}
    ></PDFDownloadLink>
  );
};

export default DownloadPDF;
