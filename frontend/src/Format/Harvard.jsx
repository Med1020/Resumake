import { useSelector } from "react-redux";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

const Harvard = () => {
  const { fullName, email, jobTitle, phone, address } = useSelector(
    (state) => state.userDetails
  );
  const {
    educationList,
    experienceList,
    projectList,
    skillList,
    awardList,
    courseList,
  } = useSelector((state) => state.resumeContent);
  return (
    <div className="container">
      <div className="p-10 ">
        {/* basic info */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-1">{fullName}</h2>
          <div className="mb-2 text-md">{jobTitle}</div>
          <div className="mb-2 flex justify-center">
            <div className="mr-2 text-sm flex justify-center items-center">
              <span className="pr-2">{email && <IoMail />}</span>
              <span>{email}</span>
            </div>
            <span className="mr-2 text-sm flex justify-center items-center">
              <span className="pr-2">{address && <FaLocationDot />}</span>
              <span>{address}</span>
            </span>
            <span className="mr-2 text-sm  flex justify-center items-center">
              <span className="pr-2">{phone && <FaSquarePhone />}</span>
              <span>{phone}</span>
            </span>
          </div>
        </div>
        {/* skills */}
        {skillList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold ">Skills</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {skillList.map(({ title }) => (
              <ul className="list-disc pl-4">
                <li className="text-sm">{title}</li>
              </ul>
            ))}
          </div>
        )}
        {/* experience */}
        {experienceList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold">Experience</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {experienceList.map(
              ({
                id,
                employer,
                jobTitle,
                city,
                country,
                startDate,
                endDate,
                description,
              }) => (
                <div className="pb-3">
                  <div className="flex justify-between mb-2 " key={id}>
                    <div>
                      <h4 className="text-sm font-semibold inline-block">
                        {jobTitle}
                      </h4>
                      <span className="text-sm italic">
                        {employer && " ,"}
                        {employer}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs">{startDate}</span>
                      <span className="text-xs">
                        {endDate && <span className="p-2">-</span>}
                        {endDate}
                      </span>

                      <span className="text-xs">
                        {city && <span className="p-2">|</span>}
                        {city}
                      </span>
                      <span className="p-2">,</span>
                      <span className="text-xs">{country}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* education */}
        {educationList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold">Education</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {educationList.map(
              ({
                id,
                school,
                degree,
                city,
                country,
                startDate,
                endDate,
                description,
              }) => (
                <div className="pb-3">
                  <div className="flex justify-between" key={id}>
                    <div>
                      <h4 className="text-sm font-semibold">{school}</h4>
                      <p className="text-xs">{degree}</p>
                    </div>
                    <div>
                      <span className="text-sm">{startDate}</span>
                      <span className="p-1">{endDate && "-"}</span>
                      <span className="text-sm">{endDate}</span>
                      <span className="p-2">{city && "|"}</span>
                      <span className="text-sm">
                        {city}
                        {country && ","}
                        {country}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>{description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {/* project */}
        {projectList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold">Project</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {projectList.map(
              ({ id, title, subTitle, startDate, endDate, description }) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-md font-semibold">{title}</h4>
                      <h2 className="text-sm">{subTitle}</h2>
                    </div>
                    <div>
                      <span className="text-sm">{startDate}</span>
                      <span className="p-1">-</span>
                      <span className="text-sm">{endDate}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
        {/* award */}
        {awardList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold ">Awards</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {awardList.map(({ award, issuer, date, description }) => (
              <div>
                <div className="flex justify-between">
                  <div>
                    <h5 className="text-md font-bold">{award}</h5>
                    <h3 className="text-sm">{issuer}</h3>
                  </div>
                  <div>
                    <span className="text-sm">{date}</span>
                  </div>
                </div>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        )}
        {/* course */}
        {courseList.length > 0 && (
          <div className="mb-4">
            <h3 className="text-md font-semibold">Course</h3>
            <div className="border-b-2 border-black-500 mb-2"></div>
            {courseList.map(
              ({
                id,
                courseTitle,
                institution,
                startDate,
                endDate,
                description,
              }) => (
                <div key={id}>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-md font-semibold">{courseTitle}</h4>
                      <h2 className="text-sm">{institution}</h2>
                    </div>
                    <div>
                      <span className="text-sm">{startDate}</span>
                      <span className="p-1">-</span>
                      <span className="text-sm">{endDate}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm">{description}</p>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Harvard;
