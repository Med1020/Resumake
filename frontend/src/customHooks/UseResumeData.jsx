import { useEffect } from "react";
import { getSingleResume } from "../Requests/resumeContentaxios";
import { toggleShowComponent } from "../Redux/Slice/displayComponent";
import {
  setawardList,
  setcertificateList,
  setcourseList,
  seteducationList,
  setexperienceList,
  setprojectList,
  setskillList,
} from "../Redux/Slice/resumeContent";
import { updateUserDetails } from "../Redux/Slice/userInfo";
import { useDispatch } from "react-redux";

const UseResumeData = (resumeId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await getSingleResume(resumeId);
        const resume = response.data.resume;

        if (resume) {
          const {
            education,
            experience,
            project,
            skill,
            course,
            certificate,
            award,
            ...rest
          } = resume;

          // Update Redux store for each section
          if (education?.length > 0) {
            dispatch(
              toggleShowComponent({ section: "education", toShow: true })
            );
            dispatch(seteducationList(education));
          }
          if (experience?.length > 0) {
            dispatch(
              toggleShowComponent({ section: "experience", toShow: true })
            );
            dispatch(setexperienceList(experience));
          }
          if (skill?.length > 0) {
            dispatch(toggleShowComponent({ section: "skill", toShow: true }));
            dispatch(setskillList(skill));
          }
          if (course?.length > 0) {
            dispatch(toggleShowComponent({ section: "course", toShow: true }));
            dispatch(setcourseList(course));
          }
          if (certificate?.length > 0) {
            dispatch(
              toggleShowComponent({ section: "certificate", toShow: true })
            );
            dispatch(setcertificateList(certificate));
          }
          if (award?.length > 0) {
            dispatch(toggleShowComponent({ section: "award", toShow: true }));
            dispatch(setawardList(award));
          }
          if (project?.length > 0) {
            dispatch(toggleShowComponent({ section: "project", toShow: true }));
            dispatch(setprojectList(project));
          }

          // Update user details
          dispatch(updateUserDetails(rest));
        }
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    if (resumeId) {
      fetchResumeData();
    }
  }, [resumeId, dispatch]);
};

export default UseResumeData;
