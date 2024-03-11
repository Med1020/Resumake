import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setJobTitle,
  setPhone,
  setAddress,
} from "../State/slice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { fullName, email, jobTitle, phone, address } = useSelector(
    (state) => state.userDetails
  );

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
            className={`p-2 text-xl ${
              fullName ? "text-black" : "text-gray-400"
            }`}
          >
            {fullName ? fullName : "Your name"}
          </p>
          <p className={`p-2  ${email ? "text-black" : "text-gray-400 "}`}>
            {email ? email : "Email"}
          </p>
          <p className={`p-2 ${phone ? "text-black" : "text-gray-400 "}`}>
            {phone ? phone : "Phone"}
          </p>
          <p className={`p-2  ${address ? "text-black" : "text-gray-400 "}`}>
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
              onChange={(e) => dispatch(setName(e.target.value))}
              value={fullName}
            ></input>
            <label>
              Job Title
              <input
                placeholder="Enter job title"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4"
                onChange={(e) => dispatch(setJobTitle(e.target.value))}
                value={jobTitle}
              ></input>
            </label>
            <div className="flex justify-between my-2">
              <label>
                Email
                <input
                  placeholder="Enter email"
                  className=" border rounded-md border-gray-300 p-2 mb-4"
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  value={email}
                ></input>
              </label>
              <label>
                Phone
                <input
                  placeholder="Enter phone"
                  className=" border rounded-md border-gray-300 p-2"
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                  value={phone}
                ></input>
              </label>
            </div>
            <label>
              Address
              <input
                placeholder="Enter address"
                className="block border rounded-md border-gray-300 w-full p-2"
                onChange={(e) => dispatch(setAddress(e.target.value))}
                value={address}
              ></input>
            </label>
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
        </div>
      )}
    </div>
  );
};

export default UserDetails;
