import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelUpdate, updateUserDetails } from "../Redux/Slice/userInfo";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { sendResumeData } from "../Requests/resumeContentaxios";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { fullName, email, jobTitle, phone, address } = useSelector(
    (state) => state.userDetails
  );
  const resumeId = useSelector((state) => state.authSlice.resumeId);

  const [editedDetails, setEditedDetails] = useState({
    fullName,
    email,
    jobTitle,
    phone,
    address,
  });
  const [previousDetails, setPreviousDetails] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedDetails = { ...editedDetails, [name]: value };

    setEditedDetails(updatedDetails);
    dispatch(updateUserDetails(updatedDetails));
  };

  const handleToggleEdit = () => {
    setPreviousDetails({ fullName, email, jobTitle, phone, address });
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    dispatch(cancelUpdate(previousDetails));
    setEditedDetails({ ...previousDetails });
    setEditMode(false);
  };

  const handleSave = async () => {
    setPreviousDetails({ fullName, email, jobTitle, phone, address });
    sendResumeData(resumeId, { fullName, email, jobTitle, phone, address });
    setEditMode(false);
  };

  return (
    <div>
      {!editMode ? (
        <div
          className="p-5 bg-white rounded-lg shadow-sm cursor-pointer"
          onClick={() => handleToggleEdit()}
        >
          <p
            className={`p-2 text-xl font-bold ${
              fullName ? "text-black" : "text-gray-400"
            }`}
          >
            {fullName ? fullName : "Your name"}
          </p>
          <p
            className={`p-2 flex items-center ${
              email ? "text-black" : "text-gray-400 "
            }`}
          >
            <MdOutlineEmail className="mr-2 h-4 w-6" />
            {email ? email : "Email"}
          </p>
          <p
            className={`p-2 flex items-center ${
              phone ? "text-black" : "text-gray-400 "
            }`}
          >
            <FaPhoneAlt className="mr-2 h-4 w-4 " />
            {phone ? phone : "Phone"}
          </p>
          <p
            className={`p-2 flex items-center ${
              address ? "text-black" : "text-gray-400 "
            }`}
          >
            <IoLocationOutline className="mr-2 h-6 w-6" />
            {address ? address : "Address"}
          </p>
        </div>
      ) : (
        <div>
          <div className="p-5 bg-white border rounded-md">
            <p className="text-2xl font-bold mb-5">Edit personal details</p>
            <label>Full Name</label>
            <input
              placeholder="Enter your first and last name"
              className="block border rounded-md border-gray-300 w-full p-2 mb-4"
              onChange={handleChange}
              value={fullName}
              name="fullName"
            ></input>
            <label>
              Job Title
              <input
                placeholder="Enter job title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4"
                onChange={handleChange}
                value={jobTitle}
                name="jobTitle"
              ></input>
            </label>
            <div className="flex my-2">
              <div className="mr-5 w-1/2">
                <label className="block">Email</label>
                <input
                  placeholder="Enter email"
                  className="w-full border rounded-md border-gray-300 p-2 mb-4"
                  onChange={handleChange}
                  value={email}
                  name="email"
                ></input>
              </div>
              <div className=" w-1/2">
                <label className="block">Phone</label>
                <input
                  placeholder="Enter phone"
                  className="w-full border rounded-md border-gray-300 p-2"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                ></input>
              </div>
            </div>
            <label>
              Address
              <input
                placeholder="Enter address"
                className="block border rounded-md border-gray-300 w-full p-2"
                onChange={handleChange}
                value={address}
                name="address"
              ></input>
            </label>
          </div>
          <div>
            <button
              className="my-2 p-2 w-24 border border-slate-300 rounded-md bg-grey-300 text-grey font-bold rounded-lg"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
            <button
              className="ml-3 p-2 w-24 border rounded-md bg-pink-500 text-white font-bold rounded-lg"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
