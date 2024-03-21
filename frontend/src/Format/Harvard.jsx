const HardwareResume = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Hardware Engineer Resume</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          <ul className="list-disc pl-4">
            <li>Experience with hardware design and testing</li>
            <li>Proficiency in PCB layout and schematic design</li>
            <li>Strong understanding of electronic components</li>
            <li>Familiarity with CAD software (e.g., Altium Designer)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <div className="mb-2">
            <h4 className="text-md font-semibold">
              Senior Hardware Engineer - ABC Electronics
            </h4>
            <p className="text-sm">July 2018 - Present</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mattis...
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold">
              Hardware Engineer - XYZ Technologies
            </h4>
            <p className="text-sm">June 2015 - June 2018</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              mattis...
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <div>
            <h4 className="text-md font-semibold">
              Bachelor of Science in Electrical Engineering
            </h4>
            <p className="text-sm">University of Engineering, City, State</p>
            <p className="text-sm">Graduated: May 2015</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareResume;
