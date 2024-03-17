import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../State/Slice/userInfo";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { fullName, email, jobTitle, phone, address } = useSelector(
    (state) => state.userDetails
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUserDetails({ [name]: value }));
  };

  const [editMode, setEditMode] = useState(false);

  const handleToggleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleSave = () => {
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
          <div className="p-5 bg-white-500 border rounded-md">
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
            <div className="flex justify-between my-2">
              <label>
                Email
                <input
                  placeholder="Enter email"
                  className=" border rounded-md border-gray-300 p-2 mb-4"
                  onChange={handleChange}
                  value={email}
                  name="email"
                ></input>
              </label>
              <label>
                Phone
                <input
                  placeholder="Enter phone"
                  className=" border rounded-md border-gray-300 p-2"
                  onChange={handleChange}
                  value={phone}
                  name="phone"
                ></input>
              </label>
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
