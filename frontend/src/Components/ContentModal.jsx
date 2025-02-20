import { content } from "../utils/utils";
import Contentcard from "./Contentcard";

const ContentModal = ({ handleCloseModal }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-80"></div>
        <div className="w-full h-full relative bg-white rounded-lg p-2 m-5 ">
          <div className="flex justify-between p-2">
            <p className=" text-2xl font-bold">Add Content</p>
            <button
              className="bg-black text-white px-2 rounded-lg"
              onClick={() => handleCloseModal()}
            >
              X
            </button>
          </div>
          <div className="flex">
            {content.map((item, index) => (
              <Contentcard
                content={item}
                key={index}
                handleCloseModal={handleCloseModal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
