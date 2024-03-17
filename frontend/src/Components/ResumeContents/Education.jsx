import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleExpandComponent } from "../../State/Slice/displayComponent";
import CancelSave from "../CancelSaveBtns";

const Education = () => {
  const { isExpanded } = useSelector((state) => state.showComponent.education);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        className="bg-white my-3 p-5 w-full rounded-lg flex justify-between cursor-pointer"
        onClick={() => dispatch(toggleExpandComponent("education"))}
      >
        <header className="p-1 text-xl font-bold text-neutral-700">
          Education
        </header>
        <button className="px-5">
          {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {isExpanded && (
        <>
          <div className="bg-white my-3 p-5 w-full rounded-lg shadow-lg ">
            <div className="p-1">
              <label htmlFor="school" className="block py-2 font-semibold">
                School
              </label>
              <input
                id="school"
                placeholder="Enter school/university"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
              />
            </div>
            <div className="p-1">
              <label htmlFor="degree" className="block py-2 font-semibold">
                Degree
              </label>
              <input
                id="degree"
                placeholder="Enter Degree"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
              />
            </div>
            <div className="flex justify-between p-1">
              <div className="w-full mr-5">
                <label htmlFor="city" className="font-semibold">
                  City
                </label>
                <input
                  id="city"
                  placeholder="Enter City"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                />
              </div>
              <div className="w-full">
                <label htmlFor="degree" className="font-semibold">
                  Country
                </label>
                <input
                  id="degree"
                  placeholder="Enter Country"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex jsutify-between p-1">
              <div className="w-full mr-5">
                <label htmlFor="startDate" className="font-semibold">
                  Start Date
                </label>
                <input
                  id="startDate"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                />
              </div>
              <div className="w-full ">
                <label htmlFor="endDate" className="font-semibold">
                  End Date
                </label>
                <input
                  id="endDate"
                  className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
                />
              </div>
            </div>
            <div className="p-1 flex">
              <input type="checkbox" className="mr-2" />
              <label>Present</label>
            </div>
            <div className="p-1">
              <label htmlFor="description" className="font-semibold">
                Description
              </label>
              <textarea
                id="description"
                className="block border rounded-md border-gray-300 w-full p-2 mb-4 bg-gray-100"
              />
            </div>
          </div>

          <CancelSave component={"education"} />
        </>
      )}
    </div>
  );
};

export default Education;
