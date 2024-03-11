import React from "react";
import { useSelector } from "react-redux";

const ResumeView = () => {
  const { fullName, email, jobTitle, phone, address } = useSelector(
    (state) => state.userDetails
  );

  return (
    <div>
      <header>{fullName}</header>
      <p>{jobTitle}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
    </div>
  );
};

export default ResumeView;
