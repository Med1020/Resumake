import { useSelector } from "react-redux";
import Harvard from "../Format/Harvard";
import Executive from "../Format/Harvard";
import Harvard_2 from "../Format/Harvard_2";
import Green from "../Format/Harvard";

const ResumeView = () => {
  const resumeTemplate = useSelector((state) => state.authSlice.resumeTemplate);
  const AllTemplates = { Harvard, Executive, Harvard_2, Green };
  const DynamicComponent = AllTemplates[resumeTemplate];

  return (
    <div className="bg-white h-full" id="resume" >
      <DynamicComponent />
    </div>
  );
};

export default ResumeView;
