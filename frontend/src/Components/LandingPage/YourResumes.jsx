import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoAddSharp } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

import useCustomHooks from "../../customHooks/customHook";
import {
  deleteResume,
  getResumeData,
  getResumes,
} from "../../Requests/resumeContentaxios";
import { setResumeId } from "../../Redux/Slice/auth";
import { updateUserDetails } from "../../Redux/Slice/userInfo";

export const YourResumes = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleChange, handleAddUserInfo } = useCustomHooks();
  const { resumeId } = useSelector((state) => state.authSlice);
  const [resumes, setResumes] = useState([]);
  const [displayResumeMenu, setdisplayResumeMenu] = useState("");

  const r = async () => {
    try {
      const response = await getResumes();
      // console.log(response.data);
      setResumes(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   r();
  // }, []);

  useMemo(() => {
    r();
  }, [resumes]);

  const handleOpenResume = async (resumeId) => {
    dispatch(setResumeId(resumeId));
    navigate("/resume");
  };
  const handleResumeMenu = (resumeId) => {
    displayResumeMenu === resumeId
      ? setdisplayResumeMenu("")
      : setdisplayResumeMenu(resumeId);
  };

  const handleDeleteResume = (resumeId) => {
    deleteResume(resumeId);
  };

  return (
    <div className="flex flex-col m-custom mx-64 my-32">
      <h1 className="text-2xl font-semibold">Your Resumes</h1>
      <p className="my-6">Create and download upto 5 resumes for free</p>
      <div className="flex w-auto overflow-auto">
        <div
          className="flex border border-black-500 rounded-md h-64 w-48 mr-4 my-4 justify-center items-center cursor-pointer"
          onClick={openModal}
        >
          <div>
            <IoAddSharp size={48} />
          </div>
        </div>
        <div className="flex flex-row ">
          {resumes &&
            resumes.length > 0 &&
            resumes.map(({ _id }) => (
              <div className="flex m-4" key={_id}>
                <div
                  className="border border-black-500 rounded-md p-2 h-64 w-48 cursor-pointer relative group"
                  onClick={() => handleOpenResume(_id)}
                >
                  {/* <img/> */}
                  <div className="opacity-0 group-hover:opacity-50 absolute bg-white">
                    Edit
                  </div>
                </div>
                <button
                  onClick={() => handleResumeMenu(_id)}
                  className="flex justify-end p-2"
                >
                  <HiDotsVertical color="grey" />
                </button>
                <div className="relative inline-block  ">
                  {displayResumeMenu === _id && (
                    <div className="absolute bg-white p-2 border rounded-md cursor-pointer">
                      <ul>
                        <li onClick={() => handleDeleteResume(_id)}>Delete</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
