import Executive from "../../assets/templates/Executive.jpg";
import Harvard from "../../assets/templates/Harvard.jpg";
import Harvard_2 from "../../assets/templates/Harvard_2.jpg";
import green from "../../assets/templates/green.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setResumeId, setResumeTemplate } from "../../Redux/Slice/auth";
import { createNewResume } from "../../Requests/resumeContentaxios";


const TemplatesModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  const dispatch = useDispatch();
  const handleCreateNewResume = async () => {
    const response = await createNewResume();
    console.log(response.data.resumeId)
    if (response.status === 200) {
      dispatch(setResumeId(response.data.resumeId));
    }
  };
  const handleClick = (tempName) => {
    console.log(tempName);
    dispatch(setResumeTemplate(tempName));
    if (isLoggedIn) {
      navigate("/resume");
      handleCreateNewResume();
    } else {
      navigate("/login");
    }

    // const response = axios.post("/api/createNewResume");
  };
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-80"></div>
        <div className="w-full h-full relative bg- rounded-lg m-5 p-10 ">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl font-bold">Templates</h1>
            <button
              className="text-2xl font-bold p-2 rounded-sm"
              onClick={() => closeModal()}
            >
              X
            </button>
          </div>
          <div className="flex">
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("Harvard")}
            >
              <img src={Harvard} alt="Harvard" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("Harvard_2")}
            >
              <img src={Harvard_2} alt="Harvard_2" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("Executive")}
            >
              <img src={Executive} alt="executive" width="300px" />
            </div>
            <div
              className="m-2 cursor-pointer"
              onClick={() => handleClick("Green")}
            >
              <img src={green} alt="green" width="300px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesModal;
