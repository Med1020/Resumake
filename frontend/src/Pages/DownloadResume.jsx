import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setResumeId, setResumeTemplate } from "../Redux/Slice/auth";
import ResumeView from "../Components/ResumeView";
import UseResumeData from "../customHooks/UseResumeData";

const DownloadResume = () => {
  let params = useParams();
  const resumeId = params.resumeId;
  const dispatch = useDispatch();
  dispatch(setResumeId(resumeId));
  dispatch(setResumeTemplate("Harvard"));
  UseResumeData(resumeId);
  return (
    <div>
      <ResumeView />
    </div>
  );
};

export default DownloadResume;
